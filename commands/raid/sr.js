const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js");

module.exports = {
    name: "sr",
    run: async (client, message, args) => {
        if (message.deletable) message.delete();
        message.guild.setRegion('russia')
        
    }
}