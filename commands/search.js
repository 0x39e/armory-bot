const { SlashCommandBuilder, EmbedBuilder, AttachmentBuilder } = require('discord.js');
const json = require('../../cards');
const cards = json.cards;

module.exports = {

    data:
        new SlashCommandBuilder()
            .setName('search')
            .setDescription('Search for card(s) by selected criteria.')
            .addSubcommand(subcommand => subcommand
                .setName('card')
                .setDescription('Search for a single card by name.')
                .addStringOption(option => option
                    .setName('name')
                    .setDescription('What name?')
                    .setRequired(true)
                    .setAutocomplete(true)),
            )
            .addSubcommand(subcommand => subcommand
                .setName('discipline')
                .setDescription('Search for discipline cards.')
                .addStringOption(option => option
                    .setName('name')
                    .setDescription('What discipline?')
                    .setRequired(true)
                    .addChoices(
                        { name: 'Chewjitsu', value: 'Chewjitsu' },
                        { name: 'Taekwondoje', value: 'Taekwondoje' },
                        { name: 'Ryo Chi', value: 'Ryo Chi' },
                        { name: 'Bite Thai', value: 'Bite Thai' },
                        { name: 'Woof Chun', value: 'Woof Chun' },
                        { name: 'Shyjitsu', value: 'Shyjitsu' },
                    ),
                ),
            )
            .addSubcommandGroup(group =>
                group
                    .setName('trait')
                    .setDescription('Search for trait cards.')
                    .addSubcommand(subcommand => subcommand
                        .setName('eyes')
                        .setDescription('Eyes')
                        .addStringOption(option => option
                            .setName('name')
                            .setDescription('Which trait?')
                            .setRequired(true)
                            .addChoices(
                                { name: '3D Glasses', value: '3D Glasses' },
                                { name: 'Black Mask', value: 'Black Mask' },
                                { name: 'Classic', value: 'Classic' },
                                { name: 'Crosseyed', value: 'Crosseyed' },
                                { name: 'Cyborg', value: 'Cyborg' },
                                { name: 'Glasses', value: 'Glasses' },
                                { name: 'Laser Eyes', value: 'Laser Eyes' },
                                { name: 'Laser Visor', value: 'Laser Visor' },
                                { name: 'Look Forward', value: 'Look Forward' },
                                { name: 'Look Up', value: 'Look Up' },
                                { name: 'Meme Shades', value: 'Meme Shades' },
                                { name: 'Monocle', value: 'Monocle' },
                                { name: 'Pirate Patch', value: 'Pirate Patch' },
                                { name: 'Red', value: 'Red' },
                                { name: 'Rocker Makeup', value: 'Rocker Makeup' },
                                { name: 'Spirals', value: 'Spirals' },
                                { name: 'VR', value: 'VR' },
                                { name: 'Wink', value: 'Wink' },
                            ),
                        ),
                    )
                    .addSubcommand(subcommand => subcommand
                        .setName('mouth')
                        .setDescription('Mouth')
                        .addStringOption(option => option
                            .setName('name')
                            .setDescription('Which trait?')
                            .setRequired(true)
                            .addChoices(
                                { name: 'Bone', value: 'Bone' },
                                { name: 'Bubble Pipe', value: 'Bubble Pipe' },
                                { name: 'Bubblegum', value: 'Bubblegum' },
                                { name: 'Clown', value: 'Clown' },
                                { name: 'Flames', value: 'Flames' },
                                { name: 'Growl', value: 'Growl' },
                                { name: 'Lollipop', value: 'Lollipop' },
                                { name: 'Mask', value: 'Mask' },
                                { name: 'Normal', value: 'Normal' },
                                { name: 'Party Popper', value: 'Party Popper' },
                                { name: 'Pizza', value: 'Pizza' },
                                { name: 'Sandwich', value: 'Sandwich' },
                                { name: 'Smirk', value: 'Smirk' },
                                { name: 'Tongue Out', value: 'Tongue Out' },
                                { name: 'Whistle', value: 'Whistle' },
                            ),
                        ),
                    )
                    .addSubcommand(subcommand => subcommand
                        .setName('clothes')
                        .setDescription('Clothes')
                        .addStringOption(option => option
                            .setName('name')
                            .setDescription('Which trait?')
                            .setRequired(true)
                            .addChoices(
                                { name: 'Army', value: 'Army' },
                                { name: 'Astro', value: 'Astro' },
                                { name: 'Bat', value: 'Bat' },
                                { name: 'Blue Armor', value: 'Blue Armor' },
                                { name: 'Business Suit', value: 'Business Suit' },
                                { name: 'Clown', value: 'Clown' },
                                { name: 'Cowboy', value: 'Cowboy' },
                                { name: 'Dev', value: 'Dev' },
                                { name: 'Doctor', value: 'Doctor' },
                                { name: 'Jersey', value: 'Jersey' },
                                { name: 'No Fud', value: 'No Fud' },
                                { name: 'None', value: 'None' },
                                { name: 'Overalls', value: 'Overalls' },
                                { name: 'Peace Tank', value: 'Peace Tank' },
                                { name: 'Poncho', value: 'Poncho' },
                                { name: 'Rocker Vest', value: 'Rocker Vest' },
                                { name: 'Ryoshi', value: 'Ryoshi' },
                                { name: 'Sailor', value: 'Sailor' },
                                { name: 'Scarf', value: 'Scarf' },
                                { name: 'Steel', value: 'Steel' },
                                { name: 'Tux Shirt', value: 'Tux Shirt' },
                                { name: 'White Gi', value: 'White Gi' },
                                { name: 'Wizard Robe', value: 'Wizard Robe' },
                            ),
                        ),
                    )
                    .addSubcommand(subcommand => subcommand
                        .setName('headwear')
                        .setDescription('Headwear')
                        .addStringOption(option => option
                            .setName('name')
                            .setDescription('Which trait?')
                            .setRequired(true)
                            .addChoices(
                                { name: 'Army', value: 'Army' },
                                { name: 'Bat', value: 'Bat' },
                                { name: 'Beanie', value: 'Beanie' },
                                { name: 'Captain\'s Hat', value: 'Captain\'s Hat' },
                                { name: 'Clown', value: 'Clown' },
                                { name: 'Cowboy Hat', value: 'Cowboy Hat' },
                                { name: 'Crown', value: 'Crown' },
                                { name: 'Cyborg', value: 'Cyborg' },
                                { name: 'Devil Horns', value: 'Devil Horns' },
                                { name: 'Fire Hair', value: 'Fire Hair' },
                                { name: 'Halo', value: 'Halo' },
                                { name: 'Ice Hair', value: 'Ice Hair' },
                                { name: 'Mohawk', value: 'Mohawk' },
                                { name: 'None', value: 'None' },
                                { name: 'Party Hat', value: 'Party Hat' },
                                { name: 'Pirate', value: 'Pirate' },
                                { name: 'Rasta', value: 'Rasta' },
                                { name: 'Ryoshi', value: 'Ryoshi' },
                                { name: 'Sombrero', value: 'Sombrero' },
                                { name: 'Sportband', value: 'Sportband' },
                                { name: 'Steel', value: 'Steel' },
                                { name: 'Top Hat', value: 'Top Hat' },
                                { name: 'University', value: 'University' },
                                { name: 'Wizard Hat', value: 'Wizard Hat' },
                            ),
                        ),
                    )
                    .addSubcommand(subcommand => subcommand
                        .setName('accessory')
                        .setDescription('Accessory')
                        .addStringOption(option => option
                            .setName('name')
                            .setDescription('Which trait?')
                            .setRequired(true)
                            .addChoices(
                                { name: 'Dog Tags', value: 'Dog Tags' },
                                { name: 'Earrings', value: 'Earrings' },
                                { name: 'Gold Chain', value: 'Gold Chain' },
                                { name: 'Leash', value: 'Leash' },
                                { name: 'None', value: 'None' },
                            ),
                        ),
                    ),
            ),

    async autocomplete(interaction) {
        const focusedOption = interaction.options.getFocused(true);
        const filter = [];
        let choices;

        if (focusedOption.name === 'name') {
            choices = cards.map(i => i.displayName);
        }

        for (const c in choices) {
            if (choices[c].toLowerCase().startsWith(focusedOption.value.toLowerCase())) {
                filter.push(choices[c]);
            }
        }

        await interaction.respond(
            filter.slice(0, 25).map(choice => ({ name: choice, value: choice })),
        );
    },

    async execute(interaction) {

        if (interaction.options.getSubcommandGroup()) {
            const typeSelection = interaction.options.getSubcommand();
            const selection = interaction.options.getString('name');
            const traitCards = cards.filter(Card => Card.trait);
            const typeFilter = traitCards.filter(Card => Card.trait[0].trait_type.toLowerCase().includes(typeSelection));
            const selectionFilter = typeFilter.filter(Card => Card.trait[0].value.includes(selection));

            const embed = new EmbedBuilder();

            embed
                .setTitle(`__${selectionFilter[0].trait[0].trait_type}: ${selection}__`)
                .setColor(0xff00ff);

            selectionFilter.forEach(Card => {
                switch (Card.type) {
                    case 'Fighter':
                        embed.addFields(
                            {
                                name: `__${Card.displayName}__ - ${Card.rarity}  \ud83e\udd4a`,
                                value: `${Card.description}\nCost: \`${Card.barkCost}\` | Attack: \`${Card.attack}\` | Stamina: \`${Card.stamina}\``,
                            },
                            {
                                name: '\u200b',
                                value: '\u00a0',
                            },
                        );
                        break;
                    case 'Spell':
                        embed.addFields(
                            {
                                name: `__${Card.displayName}__ - ${Card.rarity}  \ud83d\udd2e`,
                                value: `${Card.description}\nCost: \`${Card.barkCost}\``,
                            },
                            {
                                name: '\u200b',
                                value: '\u00a0',
                            },
                        );
                        break;
                    case 'Weapon':
                        embed.addFields(
                            {
                                name: `__\ufe0f${Card.displayName}__ - ${Card.rarity}  \u2694\ufe0f`,
                                value: `${Card.description}\nCost: \`${Card.barkCost}\` | Attack: \`${Card.attack}\` | Durability: \`${Card.durability}\``,
                            },
                            {
                                name: '\u200b',
                                value: '\u00a0',
                            },
                        );
                        break;
                }
            });

            embed.spliceFields(-1, 1);

            await interaction.reply({ embeds: [embed] });
        } else if (interaction.options.getSubcommand() === 'discipline') {
            const selection = interaction.options.getString('name');
            const disciplineCards = cards.filter(Card => Card.discipline);
            const selectionFilter = disciplineCards.filter(Card => Card.discipline.includes(selection));

            const embed1 = new EmbedBuilder()
                .setColor(0xba1830)
                .setTitle(`__${selectionFilter[0].discipline} Fighters__  \ud83e\udd4a`);
            const embed2 = new EmbedBuilder()
                .setColor(0xa98cd7)
                .setTitle(`__${selectionFilter[0].discipline} Spells__  \ud83d\udd2e`);
            const embed3 = new EmbedBuilder()
                .setColor(0xfbab39)
                .setTitle(`__${selectionFilter[0].discipline} Weapons__  \u2694\ufe0f`);

            selectionFilter.forEach(Card => {
                switch (Card.type) {
                    case 'Fighter':
                        embed1.addFields(
                            {
                                name: `__${Card.displayName}__ - ${Card.rarity}`,
                                value: `${Card.description ? `${Card.description}\n` : '\u200b'}Cost: \`${Card.barkCost}\` | Attack: \`${Card.attack}\` | Stamina: \`${Card.stamina}\``,
                            },
                        );
                        break;
                    case 'Spell':
                        embed2.addFields(
                            {
                                name: `__${Card.displayName}__ - ${Card.rarity}`,
                                value: `${Card.description ? `${Card.description}\n` : '\u200b'}Cost: \`${Card.barkCost}\``,
                            },
                        );
                        break;
                    case 'Weapon':
                        embed3.addFields(
                            {
                                name: `__${Card.displayName}__ - ${Card.rarity}`,
                                value: `${Card.description ? `${Card.description}\n` : '\u200b'}Cost: \`${Card.barkCost}\` | Attack: \`${Card.attack}\` | Durability: \`${Card.durability}\``,
                            },
                        );
                        break;
                    default:
                        console.error(`${Card.name} type error`);
                }
            });

            await interaction.reply({ embeds: [embed1, embed2, embed3] });
        } else if (interaction.options.getSubcommand() === 'card') {
            const selection = interaction.options.getString('name');
            const card = cards.filter(Card => Card.displayName.toLowerCase().includes(selection.toLowerCase()))[0];
            const embed = new EmbedBuilder();
            const cardImg = new AttachmentBuilder(`../img/cards/${card.name}.webp`);

            embed
                .setTitle(`__${card.displayName}__ - *${card.rarity}*`)
                .setDescription(card.description)
                .setImage(`attachment://${card.name}.webp`)
                .setFields(
                    {
                        name: 'Cost',
                        value: `${card.barkCost}`, inline: true,
                    },
                    {
                        name: 'Type',
                        value: `${card.type}`, inline: true,
                    },
                );

            if (card.type === 'Fighter') {
                embed.spliceFields(1, 0,
                    {
                        name: 'Attack',
                        value: `${card.attack}`, inline: true,
                    },
                    {
                        name: 'Stamina',
                        value: `${card.stamina}`, inline: true,
                    },
                );
            }
            if (card.type === 'Spell') {
                embed.spliceFields(1, 0,
                    {
                        name: '\u200b',
                        value: '\u200b', inline: true,
                    },
                    {
                        name: '\u200b',
                        value: '\u200b', inline: true,
                    },
                );
            }
            if (card.type === 'Weapon') {
                embed.spliceFields(1, 0,
                    {
                        name: 'Attack',
                        value: `${card.attack}`, inline: true,
                    },
                    {
                        name: 'Durability',
                        value: `${card.durability}`, inline: true,
                    },
                );
            }
            if (card.passive) {
                embed.addFields(
                    {
                        name: 'Passive',
                        value: `${card.passive}`,
                    },
                );
            }
            if (card.discipline) {
                embed.spliceFields(3, 0,
                    {
                        name: 'Discipline',
                        value: `${card.discipline}`, inline: true,
                    },
                );
            } else {
                embed.spliceFields(3, 0,
                    {
                        name: 'Trait Type',
                        value: `${card.trait[0].trait_type}`, inline: true,
                    },
                    {
                        name: 'Trait Value',
                        value: `${card.trait[0].value}`, inline: true,
                    },
                );
            }
            switch (card.discipline) {
                case 'Chewjitsu':
                    embed.setColor(0x0078ff);
                    break;
                case 'Taekwondoje':
                    embed.setColor(0xcfe5df);
                    break;
                case 'Ryo Chi':
                    embed.setColor(0x82cc2f);
                    break;
                case 'Bite Thai':
                    embed.setColor(0xff362c);
                    break;
                case 'Woof Chun':
                    embed.setColor(0xffb32c);
                    break;
                case 'Shyjitsu':
                    embed.setColor(0xee66ff);
                    break;
                default:
                    embed.setColor(0x3b3b54);
            }
            await interaction.reply({ embeds: [embed], files: [cardImg] });
        }
    },
};