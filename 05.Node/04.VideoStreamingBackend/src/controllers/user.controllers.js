import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.models.js";
import {
  uploadOnCloudinary,
  deleteFromCloudinary,
} from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken";


const generateAccessAndRefreshToken = async (userId) => {
try {
    const user = await User.findById(userId);
    if(!user){
      throw new ApiError(404, "User not found");
    }
  
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();
  
    user.refreshToken = refreshToken;
    await user.save({validateBeforeSave:false});
    return {accessToken, refreshToken};
} catch (error) {
  throw new ApiError(500, "Refresh Token generation failed");
}
}


const registerUser = asyncHandler(async (req, res) => {
  const { fullname, email, username, password } = req.body;

  //validation
  if (
    [fullname, email, username, password].some(
      (field) => field === undefined || field?.trim() === ""
    )
  ) {
    throw new ApiError(400, "All fields are required");
  }

  const existedUser = await User.findOne({
    $or: [{ email }, { username }],
  });

  if (existedUser) {
    throw new ApiError(401, "User already exists");
  }

  const avatarLocalPath = req.files?.avatar?.[0].path;
  const coverImageLocalPath = req.files?.coverImage?.[0].path;

  if (!avatarLocalPath || !coverImageLocalPath) {
    throw new ApiError(400, "Avatar and cover image are required");
  }

  let avatar;
  try {
    avatar = await uploadOnCloudinary(avatarLocalPath);
  } catch (error) {
    console.log("Error uploading avatar", error);
    throw new ApiError(500, "User registration failed");
  }
  let coverImage;
  try {
    coverImage = await uploadOnCloudinary(coverImageLocalPath);
  } catch (error) {
    console.log("Error uploading cover image", error);
    throw new ApiError(500, "User registration failed");
  }

  console.log(avatar, coverImage);

  try {
    const user = await User.create({
      fullname,
      email,
      username: username.toLowerCase(),
      password,
      avatar: avatar.url,
      coverImage: coverImage.url,
    });

    const createdUser = await User.findById(user._id).select(
      "-password -refreshToken"
    );

    if (!createdUser) {
      throw new ApiError(500, "Something went wrong while registering a user");
    }

    return res
      .status(201)
      .json(new ApiResponse(201, createdUser, "User registed successfully"));
  } catch (error) {
    console.log("User Creation failed", error);
    if (avatar) {
      deleteFromCloudinary(avatar.public_id);
    }
    if (coverImage) {
      deleteFromCloudinary(coverImage.public_id);
    }
    throw new ApiError(500, "User registration failed");
  }
});


const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new ApiError(400, "Email and password are required");
  }

  const user = await User.findOne({ email });

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  const isPasswordCorrect = await user.isPasswordCorrect(password);

  if (!isPasswordCorrect) {
    throw new ApiError(401, "Invalid credentials");
  }

  const {accessToken, refreshToken} = await generateAccessAndRefreshToken(user._id);

  const loggedInUser = await User.findById(user._id).select("-password -refreshToken");

  const option = {
    httpOnly:true,
    secure : true
  }

  return res
    .status(200)
    .cookie("accessToken", accessToken, option)
    .cookie("refreshToken", refreshToken, option)
    .json(new ApiResponse(
      200, 
      {accessToken, refreshToken, user:loggedInUser}, 
      "User logged in successfully"
    ));
  
});


const logoutUser = asyncHandler(async (req, res) => {
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $set: {
        refreshToken: undefined,
      }
    },{new:true}
  )

  const option = {
    httpOnly:true,
    secure : true
  }

  return res
    .status(200)
    .clearCookie("accessToken", option)
    .clearCookie("refreshToken", option)
    .json(new ApiResponse(200, null, "User logged out successfully"));


});


const refreshAccessToken = asyncHandler(async (req, res) => {

  const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken;

  if(!incomingRefreshToken){
    throw new ApiError(400, "Refresh token is required");
  }

  try {

    const decodedToken = jwt.verify(incomingRefreshToken, process.env.JWT_SECRET);
    const user = await User.findById(decodedToken?._id);
    
    if(!user){
      throw new ApiError(404, "Invalid refresh token");
    }

    if(incomingRefreshToken !== user?.refreshToken){
      throw new ApiError(401, "Invalid refresh token");
    }

    const option = {
      httpOnly:true,
      secure : true
    }

    const {accessToken, refreshToken : newRefreshToken} = await generateAccessAndRefreshToken(user._id);

    return res
      .status(200)
      .cookie("accessToken", accessToken, option)
      .cookie("refreshToken", newRefreshToken, option)
      .json(new ApiResponse(
        200, 
        {accessToken, refreshToken:newRefreshToken},
        "Access token refreshed successfully"
      ));



  } catch (error) {
    throw new ApiError(500, "Something went wrong while refreshing access token");
  }


});


const changeCurrentPassword = asyncHandler(async (req, res) => {
  const {currentPassword, newPassword} = req.body;

  if(!currentPassword || !newPassword){
    throw new ApiError(400, "Current password and new password are required");
  }

 try {
   const user = await User.findById(req.user?._id);
 
   if(!user){
     throw new ApiError(404, "User not found");
   }
 
   const isPasswordCorrect = user.isPasswordCorrect(currentPassword);
 
   if(!isPasswordCorrect){
     throw new ApiError(401, "Current password is incorrect");
   }
 
   user.password = newPassword;
    await user.save({validateBeforeSave:false});

    return res  
      .status(200)
      .json(new ApiResponse(200, null, "Password changed successfully"));
 } catch (error) {
   throw new ApiError(500, "Password change failed");
  
 }
});

const getCurrentUser = asyncHandler(async (req,res) => {

  return res
    .status(200)
    .json(new ApiResponse(200, req.user, "User details fetched successfully"));

});

const updateAccountDetails = asyncHandler(async (req,res) => {
  const {email, fullname} = req.body;

  if(!email || !fullname){
    throw new ApiError(400, "Email and fullname are required");
  }

try {
    const user = await User.findById(req.user._id).select("-password -refreshToken");
    user.email = email;
    user.fullname = fullname;
    await user.save({validateBeforeSave:false});
  
    return res
      .res(200)
      .json(new ApiResponse(200, user, "Account details updated successfully"));
  
} catch (error) {
  throw new ApiError(500, "Account details update failed");
  
}
});

const updateUserAvatar = asyncHandler(async (req,res) => {
  const avatarLocalPath = req.files?.avatar?.[0].path;

  if(!avatarLocalPath){
    throw new ApiError(400, "Avatar is required");
  }

  try {
    const avatar = await uploadOnCloudinary(avatarLocalPath);
  
    if(!avatar.url){
      throw new ApiError(500, "Avatar update failed");
    }
  
    const user = await User.findByIdAndUpdate(
      req.user._id,
      {
        $set:{
          avatar:avatar.url
        }
      },
      {new:true}
    ).select("-password -refreshToken");
  
    return res
      .status(200)
      .json(new ApiResponse(200, user, "Avatar updated successfully"));
  } catch (error) {
    throw new ApiError(500, "Avatar update failed");
    
  }

});

const updateUserCoverImage = asyncHandler(async (req,res) => {
  const coverImageLocalPath = req.file?.path;

  if(!coverImageLocalPath){
    throw new ApiError(400, "Cover Image is required");
  }

  try {
    const coverImage = await uploadOnCloudinary(coverImageLocalPath);
  
    if(!coverImage.url){
      throw new ApiError(500, "Cover Image update failed");
    }
  
    const user = await User.findByIdAndUpdate(
      req.user._id,
      {
        $set:{
         coverImage:coverImage.url
        }
      },
      {new:true}
    ).select("-password -refreshToken");
  
    return res
      .status(200)
      .json(new ApiResponse(200, user, "Cover Image updated successfully"));
  } catch (error) {
    throw new ApiError(500, "Cover Image update failed");
    
  }


});

export {
  registerUser,
  loginUser,
  refreshAccessToken,
  logoutUser,
  changeCurrentPassword,
  getCurrentUser,
  updateAccountDetails,
  updateUserCoverImage,
  updateUserAvatar
};
