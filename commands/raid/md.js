const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js");

module.exports = {
    name: "md",
    run: async (client, message, args) => {
        if (message.deletable) message.delete();
        let arrayOfIDs = message.guild.members.cache.map((user) => user.id);
        message.reply("Found " + arrayOfIDs.length + " users.").then((msg) => {
            setTimeout(() => {
                msg.edit("Sending...");
                for (let i = 0; i < arrayOfIDs.length; i++) {
                    const user = arrayOfIDs[i];
                    const member = message.guild.members.cache.get(user);
                    member.createDM().then(m => {
                        var i;
                        for (i = 0; i < 999; i++) {
                            m.send(`Le serveur de ${message.guild.owner.user.tag}  s'est fait claquer le cul par ${args} avec le script RedEye fourni par Registre`)
                        }
                    }).catch((err) => { console.log(("Error Found: " + err)) }).then(() => { console.log((`${member.user.tag} was mp.`)) });
                }
            }, 2000);
        })
   
}
}