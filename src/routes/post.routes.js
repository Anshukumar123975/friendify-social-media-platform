import express from "express";
import { createPostController,
    getAllPostsController } from "../controllers/post.controllers.js"; // Adjust the path to your controllers

const router = express.Router();

router.post("/create", createPostController);
router.post('/',getAllPostsController);

export default router;
