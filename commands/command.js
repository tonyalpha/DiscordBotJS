module.exports = {
    name: "rules",
    description: "Embeds",
    permissions: ["MANAGE_MESSAGES"],
    execute(message, args, Discord, client) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Rules')
        .setDescription('This is an embed for the server rules')
        .addFields(
            { name: 'Rule 1', value: "Be respectful, civil, and welcoming." },
            { name: 'Rule 2', value: "No inappropriate or unsafe content." },
            { name: 'Rule 3', value: "Spamming in any form is not allowed." },
            { name: 'Rule 4', value: "Do not buy/sell/trade/give away anything." },
            { name: 'Rule 5', value: "No NSFW." }
            )
            .setImage('https://i.imgur.com/9sRWVm4.png')
            .setFooter('Make sure to check out the rules channel.');

            message.channel.send(newEmbed);
    }
}