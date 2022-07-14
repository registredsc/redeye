const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js");

module.exports = {
    name: "ds",
    run: async (client, message, args) => {
        if (message.deletable) message.delete();
        message.guild.stickers.cache.forEach((s) => s.delete().catch((err) => { console.log(("Error Found: " + err)) }))
        
    }
}