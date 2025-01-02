import {Router} from 'express';

import { registerUser, logoutUser } from '../controllers/user.controllers.js';
import { upload } from '../middlewares/multer.middlewares.js';
import auth from '../middlewares/auth.middlewares.js';



const router = Router();

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

router.route('/logout').post(auth, logoutUser);

export default router