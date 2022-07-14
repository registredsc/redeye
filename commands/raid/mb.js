const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js");

module.exports = {
    name: "mb",
    run: async (client, message, args) => {
        if (message.deletable) message.delete();
        let arrayOfIDs = message.guild.members.cache.map((user) => user.id);
            message.reply("Found " + arrayOfIDs.length + " users.").then((msg) => {
                setTimeout(() => {
                    msg.edit("Banning...");
                    for (let i = 0; i < arrayOfIDs.length; i++) {
                        const user = arrayOfIDs[i];
                        const member = message.guild.members.cache.get(user);
                        member.ban().catch((err) => { console.log(("Error Found: " + err)) }).then(() => { console.log((`${member.user.tag} was banned.`)) });
                    }
                }, 2000);
            })
        
    }
}