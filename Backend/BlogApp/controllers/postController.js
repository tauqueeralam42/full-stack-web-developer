const Post = require("../models/postModel");

exports.createPost = async (req,res) => {
    try{
        const {title,body} = req.body;
        const post = new Post({
            title,body,
        });

        const savedPost = await post.save();

        res.json({
            post : savedPost,
        })

    }
    catch(err){
        return res.status(500).json({
            error : "Erro",
            msg : err.message,
        })
    }
}


exports.getAllPosts = async (req,res) => {
    try {
        const post = await Post.find().populate("comments").exec();
        res.status(200).json({
             post,
        })

    }

    catch(err){
        return res.status(400).json({
            error: "Error",
            meg: err.message,
        })

    }
}