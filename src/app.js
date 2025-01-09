import express from "express"
import authRoute from "./routes/auth.routes.js"
import postRoute from "./routes/post.routes.js"

const app = express();

app.use(express.json());

app.use("/auth", authRoute);
app.use("/posts", postRoute);

export default app; 