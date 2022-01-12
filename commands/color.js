const { MessageEmbed } = require("discord.js");

module.exports = {
    help: {
        name: "color",
        description: "A color file",
        permissions: ["MANAGE_MESSAGES"],
    },
    requirements: {
        clientPerms: ["EMBED_LINKS"]
    },
    execute(message, args, client) {
        if(!args[0]) return message.reply("You did not provide a color hex");

        if(!/^#(?:[0-9a-f]{3}){1,2}$/i.test(args[0])) return message.reply("You did not provide a valid color hex.");

        return message.reply( {embeds: [
            new MessageEmbed()
            .setColor(args[0])
            .setDescription(args[0].toUpperCase())
        ] });
    }
}