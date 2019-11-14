const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
const ytdl = require("ytdl-core");
const YouTube = require("simple-youtube-api");
const PREFIX = "r!";
const snekfetch = require("snekfetch");
const talkedRecently = new Set();
const queue = new Map();
const client = new Discord.Client();

client.once("ready", () => {
  console.log("Ready!");
  client.user.setActivity("I m online");
});

client.on("ready", () => {
  //new ready event
  setInterval(function() {
    client.guilds.forEach(g => {
      var role = g.roles.find("name", "Rainbow"); //rainbow role name
      if (role) {
        role.edit({ color: "RANDOM" });
      }
    });
  }, 6000); //the rainbow time
});

client.login(process.env.TOKEN);
