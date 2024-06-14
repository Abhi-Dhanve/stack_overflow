import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import userRoutes from "./routes/users.js";
import questionRoutes from "./routes/Questions.js";
import answerRoutes from "./routes/Answers.js";
import connectDB from "./connectMongoDb.js";

dotenv.config();
const app = express();
connectDB();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

app.get("/", (req,res) => {
  return res.status(200).send("Backend running successfully on "+ req.url)
})

app.use("/user", userRoutes);
app.use("/questions", questionRoutes);
app.use("/answer", answerRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
