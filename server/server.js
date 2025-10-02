/* eslint-disable no-undef */
import express from "express";
import fetch from "node-fetch"; // Node 18+ has native fetch, you can remove this if using Node 18+
import cors from "cors";
import dotenv from "dotenv";

dotenv.config(); // load env variables

const app = express();

// ✅ Allow only specific origins
const allowedOrigins = [
  "http://localhost:5173",
  "https://miss-muse-landing.vercel.app",
  "https://missmuse.ca",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg = `The CORS policy for this site does not allow access from the specified Origin: ${origin}`;
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  })
);

app.use(express.json());

const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;
const PORT = process.env.PORT || 5000;

app.post("/contact", async (req, res) => {
  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body),
    });

    const result = await response.json();
    res.status(200).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: "error", message: "Failed to send" });
  }
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
