const Discord = require("discord.js") 
const client = new Discord.Client()
const settings = require("./your_settings.json")
const talkedRecently = new Set();

client.on("ready", () => {

  console.log(`Logged in as ${client.user.username}!`);

  client.user.setActivity('testing', {type: "playing"})

console.log(`${client.user.tag} running on ${client.guilds.size} guilds with ${client.users.size} users.`);


});

 
client.on("message", async (message) => {
	
	let prefix = "!";
	
	if(!message.content.startsWith(prefix) || message.author.bot) return;
	
    const input = message.content.slice(prefix.length).split(' ');

    const cmd = input.shift();


if(command === `channel`) {
 
    	    const delay = args [0]

            const name1 = args [1]
	    const name2 = args [2]
	    const names = name1 + " " + name2
        	var items = Array(name1,name2);
	    const channel = message.mentions.channels.first() || message.guild.channels.find(channel => channel.name === args [3])
        if(!name1) return message.channel.send("Please input a first name to rainbow the specified channel").catch(err=> message.channel.send("No response"))
	if(!name2) return message.channel.send("Please input a second name to rainbow the specified channel").catch(err=> message.channel.send("No response"))
	if(!delay) return message.channel.send(settings.messageresponse.delaynotfound).catch(err=> message.channel.send("No response"))
        if(!channel) return message.channel.send("I haven't found the mentioned channel").catch(err=> message.channel.send("No response"))
        if(!message.guild.member(client.user.id).hasPermission("MANAGE_CHANNELS")) return message.channel.send("I need permission 'manage_channels' to execute this command.").catch(err=> message.channel.send("no response"))
        if(!message.guild.member(message.author.id).hasPermission("ADMINISTRATOR")) return message.channel.send(settings.messageresponse.membernoperm).catch(err=> message.channel.send("no response"))
        if(delay < 1200) return message.reply('Please input a number higher than 1200.')
	if(isNaN(delay)){
           message.channel.send(delay + " is a invalid delay , please put one formed only with numbers !");
        }else{
	if(talkedRecently.has(message.author.id)) {
            message.channel.send("Wait 1 minutes before using this commmand again. - " + message.author);
        }else{
        var channelstart = setInterval(function() {
            var channelz = items[Math.floor(Math.random() * items.length)];
            channel.setName(channelz)
        }, delay);
        
        

        let enable = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setDescription("Command used succesfully ! ")
        .setColor("#f4a341")
        .addField("Command name : ", "Channel", true)
        .addField("Channel activated by : ", message.author.username, true)
        .addField("Channel activated in : ", message.guild.name, true)
        .addField("With randomize delay : ", delay, true)
        .addField("On Channel : ", channel, true)
        .setThumbnail("https://cdn.discordapp.com/attachments/563959615709118503/564809023640174592/giphy_2.gif")
        .setFooter("Channel command ... " + client.user.tag)
        .setTimestamp();
            message.channel.send(enable)

        }
    }
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 60000);
}

	
});

client.login(config.token)
