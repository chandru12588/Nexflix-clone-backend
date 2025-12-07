import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// FIXED CORS (Required for Mobile + Vercel)
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
  })
);

// Parse JSON
app.use(express.json());

// TEST ROUTE (Fix for GET /api/login)
app.get("/api/login", (req, res) => {
  res.json({ status: "API Working" });
});

// LOGIN API (POST)
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  if (email === "user@netflixclone.com" && password === "password123") {
    return res.json({ success: true, message: "Login success" });
  } else {
    return res
      .status(401)
      .json({ success: false, message: "Invalid login" });
  }
});

// PORT FOR RAILWAY
const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log("Server Running on port " + PORT)
);
