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
const PREFIX = "!";
const snekfetch = require("snekfetch");
const talkedRecently = new Set();
const queue = new Map();
const client = new Discord.Client();

client.once("ready", () => {
  console.log("Ready!");
 
});

//Best Rainbow Bot .
client.on("message", message => {
  //new msg event
  if (!message.channel.guild) return;
  if (message.content.startsWith("!setup")) {
    //to create the rainbow role
    let role = message.guild.roles.find("name", "Rainbow");
    if (role)
      return message.channel.send({
        embed: {
          color: 0xff2222,
          title:
            "This Setup is Already Completed !"
        }
      }); //if the role already created return with this msg
    //start of create role
    if (!role) {
      role = message.guild.createRole({
        name: "Rainbow", //the role will create name
        color: "#000000", //the default color
        permissions: [] //the permissions
        //end of create role
      });
    }
    message.channel.send({
      embed: {
        color: 0x0efc3e,
        title:
          "The Rainbow Role Has Successfully Set Up"
      }
    }); //if the step completed
  
client.on("ready", () => {
  //new ready event
  setInterval(function() {
    client.guilds.forEach(g => {
      var role = g.roles.find("name", "Rainbow"); //rainbow role name
      if (role) {
        role.edit({ color: "RANDOM" });
      }
    });
  }, 5000); //the rainbow time
});

client.login(process.env.TOKEN);
