const Discord = require("discord.js")
const { Intents } = require("discord.js")
const fs = require("fs")
const { token, prefix, owner } = require('./botconfig/config.json')
const client = new Discord.Client()
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.slashCommands = new Discord.Collection();
client.categories = fs.readdirSync("./commands");
client.events = new Discord.Collection();
client.config = require("./botconfig/config.json")
module.exports.client = client;
["Command", "Event"].forEach(handler => {
    require(`./Handler/${handler}`)(client);
  });

  



client.login(token)
