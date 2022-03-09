const { Client } = require('discord.js');
const { bottoken, serverID, roleID, interval } = require('./config.json')
const bot = new Client();

bot.on("ready", async () => {

    console.log(`${bot.user.tag} is now online`);
    //////////FETCHING GUILD
    let guild = bot.guilds.cache.get(serverID)
    if (!guild) throw `i cant find any server with this id : ${serverID}`
    //////////FETCHING RAINBOW ROLE
    let role = guild.roles.cache.find(u => u.id === roleID)
    if (!role) throw `i cant find any role in server - ${guild.name}`
    //////////RAINBOW ROLE INTERVAL YOU CAN CHANGE IT ACCORDING TO YOUR MOOD 
    //////////BUT MAKE SURE DONT MAKE IT LESS THEN 10 SECONDS THEN IT WILL ABUSE DISCORD API
    if (interval < 30000) console.log(`\nnow have some fun dumb`)
    setInterval(() => {
        role.edit({ color: 'RANDOM' }).catch(err => console.log(`facing error during changing the role`));
    }, interval)
    //////////SETING BOT ACTIVITY
    bot.user.setPresence({ status: 'dnd', activity: { name: 'Iconical is da best', type: 'LISTENING', } })
})
/////////////////////////////////////////LOGING IN THE BOT///////////////////////////
bot.login(bottoken)

