import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import dotenv from "dotenv";


dotenv.config();



// Configuring cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (file) => {
  try {
    if (!file) return null;

    const response = await cloudinary.uploader.upload(file, {
      resource_type: "auto",
    });

    console.log("File uploaded successfully" + response.url);
    fs.unlinkSync(file);
    return response;
  } catch (error) {
    console.log("Error uploading file", error);
    fs.unlinkSync(file);
    return null;
  }
};

const deleteFromCloudinary = async (publicId) => {
  try {
    if (!publicId) return null;

    const response = await cloudinary.uploader.destroy(publicId);

    console.log("File deleted successfully");
    return response;
  } catch (error) {
    console.log("Error deleting file", error);
    return null;
  }
}

export {uploadOnCloudinary, deleteFromCloudinary};
