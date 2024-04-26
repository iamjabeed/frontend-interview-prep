import bcrypt from "bcryptjs";
import User from "../models/userModel.js";

const userRegistration = async (req, res) => {
  const { email, username, password } = await req.body;
  //   console.log(email, username, password);
  //   console.log("req.body: ", req.body);

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("user already exist");
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(password, salt);
  const newUser = new User({ email, password: hashedPass, username });
  try {
    await newUser.save();
    if (newUser) {
      res.status(201);
      res.json({
        message: "user registred",
        user: {
          _id: newUser._id,
          username: newUser.username,
          email: newUser.email,
        },
      });
    }
  } catch (error) {
    console.log(error);
    throw new Error(error?.message || error);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });
    if (userExist) {
      const validPass = await bcrypt.compare(password, userExist.password);
      if (validPass) {
        return res.status(200).json({
          message: "Login success",
          user: {
            email: userExist.email,
            _id: userExist._id,
          },
        });
      } else {
        return res.status(400).json({ error: "Invalid password" });
      }
    } else {
      return res.status(400).json({ error: "User not found" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export { userRegistration, login };
