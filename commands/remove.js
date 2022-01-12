const profileModel = require("../models/profileSchema");

module.exports = {
    name: "remove",
    description: "Remove balance from user.",
    permissions: ["ADMINISTRATOR"],
    async execute(message, args, client, Discord, profileData) {
        const member = message.guild.members.cache.get(args[0]);
        if (!args[1] || isNaN(args[1])) {
            message.channel.send("Please enter an amount to remove from the wallet.");
        }
        else if(!member) {
            message.channel.send('Professor cannot find this member.')
        }
        else {
            const response = await profileModel.findOneAndUpdate(
                {
                    userID: member.id,
                },
                {
                    $inc: {
                        balance: -args[1],
                    },
                }
            );
            return message.channel.send(`**${message.author.username}** removed **$${args[1]}** from your balance.`);
        }
    },
};