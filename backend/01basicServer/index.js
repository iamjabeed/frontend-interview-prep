import express from "express";
import connectDB from "./config/db.js";
import userRouter from "./routes/userRoute.js";

const app = express();
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get("/test", (req, res) => {
//   res.send("hello from app");
// });

app.use("/api", userRouter);
app.listen(5050, (req, res) => {
  console.log("app listening at 5050");
});
