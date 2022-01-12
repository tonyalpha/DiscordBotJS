module.exports = {
    name: 'unban',
    description: "This command unbans a member",
    permissions: ["ADMINISTRATOR"],
    async execute(message, args, client) {
        if(!args[0]) return message.channel.send('Please provide the user id to unban.');
        try {
            const member = await message.guild.members.unban(args[0]);
            return message.channel.send(`Professor has unbanned **${member}**.`);
        } catch {
            return message.channel.send('Professor could either not find them or they were not banned!');
        }
    }
}