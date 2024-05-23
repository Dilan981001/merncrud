const express = require('express');
const Posts = require('../models/posts');

const router = express.Router();

// Save posts
router.post('/posts/save', async (req, res) => {
    let newPost = new Posts(req.body);

    try {
        await newPost.save();
        return res.status(200).json({
            success: "Posts saved successfully"
        });
    } catch (err) {
        return res.status(400).json({
            error: err
        });
    }
});

//get post
router.get('/posts', async (req, res) => {
    try {
        const posts = await Posts.find().exec();
        return res.status(200).json({
            success: true,
            existingPosts: posts
        });
    } catch (err) {
        return res.status(400).json({
            error: err
        });
    }
});



//update posts
router.put('/post/update/:id', async (req, res) => {
    try {
        await Posts.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }).exec();
        return res.status(200).json({
            success: "Update successful"
        });
    } catch (err) {
        return res.status(400).json({ error: err });
    }
});



//delete post
router.delete('/post/delete/:id', async (req, res) => {
    try {
        const deletedPost = await Posts.findByIdAndDelete(req.params.id).exec();
        return res.json({
            message: "Delete successful",
            deletedPost
        });
    } catch (err) {
        return res.status(400).json({
            message: "Delete unsuccessful",
            err
        });
    }
});

module.exports = router;
