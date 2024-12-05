import mongoose from "mongoose";
import { DB_NAME, MONGODB_URI } from "../constants.js";

const connectDb = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `Database connetcted successfully !!! ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log(`Error cnnecting in database`, error.message);
  }
};
export default connectDb;
