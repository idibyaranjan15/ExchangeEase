import { signupSchema } from "../validations/user.validation.js";
import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../constants.js";
import Account from "../models/account.model.js";
export const signup = async (req, res) => {
  const validation = signupSchema.safeParse(req.body);
  if (!validation.success) {
    return res.status(400).json({
      message: "Validation Format Error ",
    });
  }
  const { username, password, firstname, lastname } = req.body;
  try {
    const userAlreadyExists = await User.findOne({ username });
    if (userAlreadyExists)
      return res.status(400).json({ message: "User already registered" });
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username: username,
      password: hashedPassword,
      firstname: firstname,
      lastname: lastname,
    });
    const userId = newUser._id;
    await Account.create({
      userId,
      balance: 1 + Math.random() * 10000,
    });
    await newUser.save();
    const token = jwt.sign({ userId }, JWT_SECRET, { expiresIn: "1d" });
    return res
      .status(200)
      .json({ success: true, message: "User registered successfully", token });
  } catch (error) {
    res.status(400).json({ success: false, message: "Something went wrong" });
  }
};
