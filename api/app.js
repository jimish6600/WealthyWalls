import express from "express";
import postRouter from "./routes/post.route.js";
import authRouter from "./routes/auth.route.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use("/api/post",postRouter);
app.use("/api/auth",authRouter);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});