const e = process.env;
const fs = require('node:fs');
const { Client, Collection, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

client.commands = new Collection();

for (const file of commandFiles) {

    const command = require(`./commands/${file}`);

    if ('data' in command && ('execute' in command || 'autocomplete' in command)) {
        client.commands.set(command.data.name, command);
    } else {
        console.log(`[WARNING] The command at ./commands/${file} is missing a required "data" or "execute" property.`);
    }

}

for (const file of eventFiles) {

    const event = require(`./events/${file}`);

    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args));
    } else {
        client.on(event.name, (...args) => event.execute(...args));
    }
}

client.login(e.TOKEN);
