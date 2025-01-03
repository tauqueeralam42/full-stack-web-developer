import {Router} from 'express';

import { 
    registerUser, 
    logoutUser, 
    loginUser,
    refreshAccessToken,
    changeCurrentPassword,
    getCurrentUser,
    getUserChannelProfile,
    updateAccountDetails,
    updateUserAvatar,
    updateUserCoverImage,
    getWatchHistory, 
} from '../controllers/user.controllers.js';
import { upload } from '../middlewares/multer.middlewares.js';
import auth from '../middlewares/auth.middlewares.js';



const router = Router();


// Register a new user
router.route('/register').post(
    upload.fields([
        {
            name:"avatar",
            maxCount:1
        },
        { 
            name:"coverImage",
            maxCount:1
        }
    ]),
    registerUser
);
router.route('/login').post(loginUser);
router.route("/refresh-token").post( refreshAccessToken);



router.route('/logout').post(auth, logoutUser);
router.route("/change-password").post(auth, changeCurrentPassword);
router.route("/current-user").get(auth, getCurrentUser);
router.route("/c/:username").get(auth, getUserChannelProfile);
router.route("/update-account").patch(auth,updateAccountDetails);
router.route("/history").get(auth, getWatchHistory);


router.route("/avatar").patch(auth, upload.single("avatar"), updateUserAvatar);
router.route("/cover-image").patch(auth, upload.single("coverImage"), updateUserCoverImage);



export default router