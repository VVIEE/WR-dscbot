const discord = require('discord.js')
const { MessageButton } = require("discord-buttons")


module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return

    const embed = new discord.MessageEmbed()
    .setTitle("Romek is gey :D")
    .setColor("BLUE")

    const yes = new MessageButton()
    .setStyle("green")
    .setLabel('Yes')
    .setID("smart")

    const no = new MessageButton()
    .setStyle("red")
    .setLabel("No")
    .setID("dumbass")

    message.channel.send("", {
        buttons: [yes, no],
        embed: embed
    })
}

module.exports.help = {
    name: 'sm',
    aliases: []
}