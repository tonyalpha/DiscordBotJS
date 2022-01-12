const { MessageFlags } = require("discord.js");

module.exports = {
    name: 'clear',
    description: "Clear messages",
    permissions: ["MANAGE_MESSAGES"],
    async execute(message, args, client) {
        if(!args[0]) return message.reply("Please type the amount of messages you would like to clear.");
        if(isNaN(args[0])) return message.reply("Please type a real number.");

        if(args[0] > 100) return message.reply("You cannot delete more than 100 messages.");
        if(args[0] < 1) return message.reply("You cannot delete less than 1 message.");

        await message.channel.messages.fetch({limit: args[0]}).then(messages => {
            message.channel.bulkDelete(messages, true);
        })
    }
}