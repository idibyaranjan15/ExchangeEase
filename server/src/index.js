import express from "express";
import { PORT } from "./constants.js";
import connectDb from "./db/connectDb.js";
import userRouter from "./routes/user.route.js";
const app = express();

app.use("/api/user", userRouter);

app.listen(PORT, () => {
  connectDb();
  console.log(`Server is running on port ${PORT}...`);
});
