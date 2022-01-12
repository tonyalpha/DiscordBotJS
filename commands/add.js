const profileModel = require("../models/profileSchema");

module.exports = {
    name: "add",
    description: "Add balance to user.",
    permissions: ["ADMINISTRATOR"],
    async execute(message, args, client, Discord, profileData) {
        const member = message.guild.members.cache.get(args[0]);
        if (!args[1] || isNaN(args[1])) {
            message.channel.send("Please enter an amount to add to the wallet.");
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
                        balance: args[1],
                    },
                }
            );
            return message.channel.send(`**${message.author.username}** added **$${args[1]}** to your balance.`);
        }
    },
};