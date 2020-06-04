require('dotenv').config()
const Discord = require('discord.js');
const client = new Discord.Client();
const cortex = require('./cortex').cortex

client.on('ready', () => {
    console.log(`Back online again ${client.user.tag}!`);
});

client.on('message', async msg => {
    if(!msg.author.bot) {
        if((msg.cleanContent.startsWith("@" + client.user.username) || msg.channel.type == 'dm')){
            let message = msg.cleanContent.replace(`@${client.user.username} `, '').replace(`@${client.user.username}`, '')
            let sessionId = msg.author.id;
            await cortex(message, sessionId)
            .then(result => msg.channel.send(result))
            .catch(e => msg.channel.send(e))
        }
    }
})

client.login(process.env.BOT_TOKEN);