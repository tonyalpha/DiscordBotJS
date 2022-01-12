module.exports = {
    name: 'kick',
    description: "This command kicks a member",
    permissions: ["MANAGE_MESSAGES"],
    execute(message, args, client) {
        const member = message.mentions.members.first();

        if(member) {
            member.kick();
            return message.reply(`Professor has kicked **${member}**.`)
        } else {
            return message.reply("You couldn't kick that member.")
        }
    }
}