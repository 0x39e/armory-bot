const { REST, Routes } = require('discord.js');
const fs = require('node:fs');
const e = process.env;

const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    commands.push(command.data.toJSON());
}

// Construct REST instance
const rest = new REST({ version: '10' }).setToken(e.TOKEN);

(async () => {
    try {
        console.log(`⏳ Started refreshing ${commands.length} application (/) commands.`);

        // The put method is used to fully refresh all commands in the guild with the current set
        const data = await rest.put(

            /* Deploy commands globally
      Routes.applicationCommands(e.clientId), */

            /* Deploy commands to specified guild */
            Routes.applicationGuildCommands(e.clientId, e.guildId),
            { body: commands },
        );

        console.log(`🚀 Successfully reloaded ${data.length} application (/) commands.`);
    } catch (error) {
        console.error(error);
    }
})();

// DELETE COMMANDS
// ⚠️ Delete guild-based command.
/* rest.delete(Routes.applicationGuildCommand(e.clientId, e.guildId, '1063176400447733852'))
  .then(() => console.log('🗑️ Successfully deleted guild command.'))
  .catch(console.error); */
// ⚠️ Delete global command.
/* rest.delete(Routes.applicationCommand(e.clientId, 'commandId'))
  .then(() => console.log('🗑️ Successfully deleted application command.'))
  .catch(console.error); */
// ❌ Delete ALL guild-based commands.
/* rest.put(Routes.applicationGuildCommands(e.clientId, e.guildId), { body: [] })
  .then(() => console.log('🗑️ Successfully deleted all guild commands.'))
  .catch(console.error); */
// ❌ Delete ALL global commands.
/* rest.put(Routes.applicationCommands(e.clientId), { body: [] })
  .then(() => console.log('🗑️ Succesfully deleted all application commands.'))
  .catch(console.error); */