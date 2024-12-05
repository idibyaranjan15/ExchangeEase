import mongoose, { Schema } from "mongoose";

const accountschema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  balance: {
    type: String,
    required: true,
  },
});
const Account = mongoose.model("Account", accountschema);
export default Account;
