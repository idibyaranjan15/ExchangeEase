import express from "express";
import { PORT } from "./constants.js";
import connectDb from "./db/connectDb.js";
import userRouter from "./routes/user.route.js";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user", userRouter);

app.listen(PORT, () => {
  connectDb();
  console.log(`Server is running on port ${PORT}...`);
});
