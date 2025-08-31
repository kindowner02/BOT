// ================= Server (Uptime check ke liye) =================
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
  host: "thedemolisher.progamer.me",  // apna Minecraft server IP daalo
  port: 17776,             // agar custom port hai to change karo
  username: "BOT_NAME"     // yaha apna bot ka naam daalo
});

bot.on("login", () => {
  console.log("Bot logged in!");
});

bot.on("end", () => {
  console.log("Bot disconnected");
});
