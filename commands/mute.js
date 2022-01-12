const ms = require("ms");

module.exports = {
    name: "mute",
    description: "This mutes a member",
    permissions: ["MANAGE_MESSAGES"],
    execute(message, args, client) {
        const member = message.mentions.members.first();
        if (member) {
            let mainRole = message.guild.roles.cache.find(role => role.name === "Member");
            let muteRole = message.guild.roles.cache.find(role => role.name === "Muted");

            if (!args[1]) {
                member.roles.remove(mainRole.id);
                member.roles.add(muteRole.id);
                message.channel.send(`Professor has muted **${member}**`);
                return
            }
            member.roles.remove(mainRole.id);
            member.roles.add(muteRole.id);
            message.channel.send(`Professor has muted **${member}** for ${ms(ms(args[1]))}.`);

            setTimeout(function () {
                member.roles.remove(muteRole.id);
                member.roles.add(mainRole.id);
                message.channel.send(`Professor has unmuted **${member}**.`);
            }, ms(args[1]));
        } else {
            message.channel.send("Professor cannot find that member.")
        }
    }
}