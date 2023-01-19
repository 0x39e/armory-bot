const { Events } = require('discord.js');

module.exports = {

    name:
        Events.InteractionCreate,
    async execute(interaction) {
        if (!(interaction.isChatInputCommand() || interaction.isAutocomplete())) return;

        const command = interaction.client.commands.get(interaction.commandName);
        const logError = `Error executing ${interaction.commandName}`;

        if (!command) {
            console.error(`No command matching ${interaction.commandName} was found.`);
            return;
        }

        try {

            if (interaction.isChatInputCommand()) {
                await command.execute(interaction);
            } else {
                await command.autocomplete(interaction);
            }

        } catch (error) {
            console.error(`${logError}\n${error}`);
            await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
        }

    },
};
