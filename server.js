import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  if (email === "user@netflixclone.com" && password === "password123") {
    return res.json({ success: true, message: "Login success" });
  } else {
    return res.status(401).json({ success: false, message: "Invalid login" });
  }
});

app.listen(PORT, () => console.log("Server Running on port " + PORT));
