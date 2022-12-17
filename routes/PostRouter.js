const express = require("express");
const Post = require("../models/Post");
const postRouter = express.Router();

postRouter.post("/create", async (req, res) => {
  try {
    const newPost = new Post(req.body);
    const result = await newPost.save();
    res.status(200).send({ msg: "new post", post: result });
  } catch (error) {
    console.log(error);
  }
});

postRouter.get("/", async (req, res) => {
  try {
    const result = await Post.find();
    res.status(200).send({ msg: "all posts", posts: result });
  } catch (error) {
    console.log(error);
  }
});

postRouter.get("/:id", async (req, res) => {
  try {
    const result = await Post.findById(req.params.id);
    res.status(200).send({ msg: "post with id", post: result });
  } catch (error) {
    console.log(error);
  }
});

postRouter.put("/:id", async (req, res) => {
  try {
    await Post.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          ...req.body,
        },
      }
    );

    res.status(200).send({ msg: "post updated" });
  } catch (error) {
    console.log(error);
  }
});

postRouter.delete("/:id", async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.status(200).send("post deleted");
  } catch (error) {
    console.log(error);
  }
});
module.exports = postRouter;
