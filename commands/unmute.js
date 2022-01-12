module.exports = {
    name: "unmute",
    description: "This unmutes a member",
    permissions: ["MANAGE_MESSAGES"],
    execute(message, args, client) {
        const member = message.mentions.members.first();
        if(member) {
            let mainRole = message.guild.roles.cache.find(role => role.name === "Member");
            let muteRole = message.guild.roles.cache.find(role => role.name === "Muted");
            
            member.roles.remove(muteRole.id);
            member.roles.add(mainRole.id);
            message.channel.send(`Professor has muted **${member}**.`);
                } else {
            message.channel.send("Professor cannot find that member.")
        }
    }
}