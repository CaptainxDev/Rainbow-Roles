const Discord = require("discord.js");
const forEachTimeout = require("foreach-timeout");
const client = new Discord.Client();
const colors = ["RANDOM"];
const stop = [];
async function color() {
  forEachTimeout(
    colors,
    color => {
      client.guilds.forEach(guild => {
        if (!stop.includes(guild.id)) {
          let role = guild.roles.find("name", "Rainbow");
          if (role && role.editable) role.setColor(color);
        }
      });
    },
    10000
  ).then(color);
}
client.on("ready", () => {
  color();
});
client.on("guildCreate", guild => {
  let channels = guild.channels.filter(
    channel =>
      channel.type === "text" &&
      channel
        .permissionsFor(guild.members.get(client.user.id))
        .has("SEND_MESSAGES")
  );
  if (channels.size > 0) channels.first().send("");
});
client.on("message", message => {
  if (message.channel.type !== "text") return;
  if (message.content === "!off") {
    stop.push(message.guild.id);
    return message.channel.send({
      embed: {
        title:
          "Alright rainbow role stop",
        color: 0xff2222
      }
    });
  }
  if (message.content === "!on") {
    stop.splice(stop.indexOf(message.guild.id), 1);
    return message.channel.send({
      embed: {
        title:
          "Alright Rainbow role is Start !",
        color: 0x00ff00
      }
    });
  }
});
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
  client.user.setStatus("dnd");
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
  }
});



client.login(process.env.TOKEN);
  
