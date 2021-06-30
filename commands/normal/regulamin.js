  
const discord = require('discord.js')


module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;


    const embed = new discord.MessageEmbed()
    .setTitle('Regulamin') // sets the title for the embed
    .setDescription('') // sets the description
    .setColor('#00ff00') // color
    .setTimestamp() // put when the msg got sent
    .addFields(
        { name: '1. Postanowienia Ogólne', value: '1.1 Nieprzestrzeganie poniższego regulaminu wiąże się z otrzymaniem kary. 1.2 Nieznajomość regulaminu nie zwalnia z jego przestrzegania. 1.3 Administracja ma pełne prawa do zmieniania treści regulaminu bez wcześniejszego powiadomienia użytkowników o zmianie. 1.4 Niniejszy regulamin wchodzi w życie z dniem 18 października 2018 roku.', inline: true},)

    message.channel.send(embed) // sends the embed

}


module.exports.help = {
    name: `regulamin`,
    aliases: []
};