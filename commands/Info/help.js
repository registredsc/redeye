const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js");

module.exports = {
    name: "help",
    aliases: ["h"],
    run: async (client, message, args) => {
        const help = new MessageEmbed()
        .setTitle("RedEye Panel")
        .addField("mc", "crée plusieurs channels")
        .addField("dc", "supprime tout les channels")
        .addField("dr", "supprime tout les rôles")
        .addField("de", "supprime tout les emojis")
        .addField("ds", "supprime tout les stickers")
        .addField("mb", "ban tout le monde")
        .addField("mk", "kick tout le monde")
        .addField("ms", "ping dans tout les channels")
        .addField("md", "mp tout les membres du serveur")
        .addField("sr", "change la région du serveur")
        .addField("def", "change l'apparence du serv(nom pp)")
        .addField("des", "supprime tout les emojis et stickers")
        .addField("sea", "donne les perms admin au rôle @everyone")
        message.channel.send(help)
    }
}