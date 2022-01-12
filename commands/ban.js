module.exports = {
    name: 'ban',
    description: "This command bans a member",
    permissions: ["MANAGE_MESSAGES"],
    execute(message, args, client) {
        const member = message.mentions.members.first()
        if(member) {
            member.ban();
            return message.reply(`Professor has banned **${member}**.`)
        } else {
            return message.reply("You couldn't ban that member.")
        }
    }
}