const Discord = require('discord.js')
const client = new Discord.Client()
const prefix = '++'
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
	client.user.setActivity('Team Color OS', {type: "playing"})
 
console.log('Done The Watching Setup Completed')
	
});
//Best Rainbow Bot .
client.on('message', message => {//new msg event
if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + 'setup')) {//to create the rainbow role
	  let role = message.guild.roles.find('name', 'TCOS | ☆ Team Color OS')
    if(role) return message.channel.send(`This Setup is Already Completed !`)//if the role already created return with this msg
  //start of create role 
  if(!role){
   rainbow = message.guild.createRole({
   name: "TCOS | ☆ Team Color OS",//the role will create name
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
                  var role = g.roles.find('name', 'TCOS | ☆ Team Color OS');//rainbow role name
                  if (role) {
                      role.edit({color : "RANDOM"});
                  };
      });
  }, 6000);//the rainbow time
})

client.login(process.env.token)
