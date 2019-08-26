const Discord = require('discord.js')
const client = new Discord.Client()
const prefix = '#'
//information about the bot
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[═════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations About Rainbow bot:')
  console.log('')
  console.log(`Servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`Channels! [ " ${client.channels.size} " ]`);
  console.log(`Arch! [ " ${process.arch} " ]`);
  console.log(`Platform! [ " ${process.platform} " ]`);
  console.log(`Node Version! [ " ${process.version}" ]`);
  console.log(`Prefix! [ " ${prefix}" ]`);
  console.log(`Language! [ " NodeJS " ]`);
  console.log(`Ram Usage! [ " ${(process.memoryUsage().rss / 1048576).toFixed()}MB " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(`${client.user.username} Is Online`)
  console.log('╚[════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log('Created by 아유 | Aka ＡＹＵＳＨ#1999')
  console.log('╚[════════════]╝')
client.user.setActivity('Rainbow Hell 🌈', {type: "watching"});
 
console.log('Done The Watching Setup Completed')
	
});
//Best Rainbow Bot .
client.on('message', message => {//new msg event
if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + 'setup')) {//to create the rainbow role
	  let role = message.guild.roles.find('name', 'Fade')
    if(role) return message.channel.send(`This Setup is Already Completed !`)//if the role already created return with this msg
  //start of create role 
  if(!role){
   rainbow = message.guild.createRole({
   name: "Fade",//the role will create name
   color: "#000000",//the default color
   permissions:[]//the permissions
 //end of create role
 
})


}
message.channel.send('The Rainbow Role Has Successfully Set Up')//if the step completed
}})

client.on('ready', () => {//new ready event
  setInterval(function(){
      client.guilds.forEach(g => {
                  var role = g.roles.find('name', 'Fade');//rainbow role name
                  if (role) {
                      role.edit({color : "RANDOM"});
                  };
      });
  }, 5000);//the rainbow time
})

client.on("message", message => {//new msg event
  if (message.content === "#help") {//the help cmd
      message.reply('Sent you a DM! 📫')
        let rainembed = new Discord.RichEmbed()//new embed
        //the embed description (help msg)
        .setColor('#f44242')
        .setFooter('Made With ❤️ By 아유 | Aka ＡＹＵＳＨ#1999')
        .setDescription(`**
★ ====================🔥 Instructions 🔥==================== ★
+setup
- To create the Rainbow Role & Start The Rainbow
+invite 
- To Invite The Bot
The steps of the role did not worked
1- Set the bot role on top 
2- Kick and reinvite the bot
3- create a role name rainbow
If you have a question or an issue with my bot
1- Contact me - 아유 | Aka ＡＹＵＳＨ#1999 
2- Join official server https://discord.gg/4h2b7pC
★ =====================🌈 rainbow 🌈===================== ★
**`)

message.author.sendEmbed(rainembed)//send the embed to the author dm
    }})
   client.on('message', message => {//new cmd
	   if(message.content.startsWith(`#invite`)) { //the invite bot cmd
		   if(!message.channel.guild) return;
           message.reply('Sent you a DM! 📫')
		   var embed = new Discord.RichEmbed()
		   .setTitle(">> ClickHere To Invite" + `${client.user.username}` + " <<")
		   .setURL("https://discordapp.com/oauth2/authorize?client_id=" + `${client.user.id}` + "&scope=bot&permissions=2080374975")
		   .setTimestamp()
		   .setFooter(`Requested By | ${message.author.username}`)
           .setColor("RANDOM")
      
		   message.author.send({embed})//send the url in the author dm
	   }
   });
client.login(process.env.token)
