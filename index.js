// ================= Server (UptimeRobot ke liye) =================
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Bot is running!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Web server running on port ${port}`);
});

// ================= Minecraft Bot =================
const mineflayer = require("mineflayer");

const bot = mineflayer.createBot({
  host: "thedemolisher.progamer.me", // apna server IP daal
  port: 17776,           // apna server port daal
  username: "Bot123"
});
