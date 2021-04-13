const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log("Estoy listo!");
 });
 
 client.on("message", (message) => {
   if(message.content.startsWith("ping")) {
     message.channel.send("pong!");
   }
 
 });
 
 client.login("NzU1MjMwMDgxNDExOTczMTgy.X2AQ0g.HhoLuuZjPZF2FVzidM8Fg_Tm0k4");