import { User } from "../models/user.models.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const JWT_SECRET = "anshu";

export const registerController = async(req,res) => {
    const {username, email, password, avatar} = req.body;

    if(!username || !email || !password){
        return res.status(400).json("Username, email and password are mandatory");
    }

    if(username.length < 6){
        return res.status(400).json({message: "Password must be atleast 6 characters long."});
    }

    try{
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(409).json({ message: "Email is already registered" });
        }

        const existingUsername = await User.findOne({ username });
        if (existingUsername) {
          return res.status(409).json({ message: "Username is already taken" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            avatar,
        });

        const token = jwt.sign(
            { userId: newUser._id, email: newUser.email},
            JWT_SECRET,
            { expiresIn: "1h" } // Token will expire in 1 hour
          );
        await newUser.save();

        res.status(201).json({
            message: "User registered successfully",
            user: {
              id: newUser._id,
              username: newUser.username,
              email: newUser.email,
              avatar: newUser.avatar,
              totalLikes: newUser.totalLikes,
              totalComments: newUser.totalComments,
              totalPosts: newUser.totalPosts,
              friends: newUser.friends,
            },
            token,
          });
    } catch (error) {
      console.error("Error during registration:", error);
      res.status(500).json({ message: "Internal server error" });
    }
}