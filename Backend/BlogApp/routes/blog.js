const express = require("express");
const router = express.Router();

const {likePost, unlikePost} = require("../controllers/LikeController");
const {createComment} = require("../controllers/CommentController");
const {createPost, getAllPosts} = require("../controllers/PostController")



router.post("/likes/like", likePost);
router.post("/likes/unlike", unlikePost);
router.post("/comments/create", createComment);
router.post("/post/create", createPost);
router.get("/posts", getAllPosts);



module.exports = router;