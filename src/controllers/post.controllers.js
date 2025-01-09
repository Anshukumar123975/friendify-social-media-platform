import { Post } from "../models/post.models.js";  // Adjust the path to your Post model
import { User } from "../models/user.models.js";  // Adjust the path to your User model

export const createPostController = async (req, res) => {
  const { username, avatar, content, media } = req.body;

  // Validate input
  if (!username || !content) {
    return res.status(400).json({ message: "Username and content are required" });
  }

  try {
    // Ensure the user exists in the database before creating a post
    const user = await User.findById(username);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Create a new post
    const newPost = new Post({
      username,
      avatar,
      content,
      media,
    });

    // Save the post to the database
    await newPost.save();

    // Respond with the created post
    res.status(201).json({
      message: "Post created successfully",
      post: newPost,
    });
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


export const getAllPostsController = async (req, res) => {
  try {
    // Fetch all posts from the database
    const posts = await Post.find();

    if (posts.length === 0) {
      return res.status(404).json({ message: "No posts found" });
    }

    // Return the posts
    res.status(200).json({
      message: "Posts fetched successfully",
      posts,
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
