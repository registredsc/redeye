const client = require("../../index").client
client.on('ready', async () => {
    client.user.setActivity("RedEye By Registre", {type: 1, url: "https://www.twitch.tv/evenac" })
})