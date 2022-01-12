const profileModel = require("../models/profileSchema");

module.exports = {
    name: "findbalance",
    description: "Find any user their balance.",
    permissions: ["ADMINISTRATOR", "MANAGE_MESSAGES"],
    async execute(message, args, cmd, client, Discord, profileData) {

        if (!profileData) {
            message.channel.send('Wallet created. Please attempt the command again.');
        } else {
            const member = message.guild.members.cache.get(args[0]);
            if (args.length < 1) {
                message.channel.send(`Please enter a UID to find the wallet.`);
            } else if (args.length = 1) {
                if (!member) {
                    message.channel.send('Professor could not find this member.');
                } else {
                    const findUser = await profileModel.findOne({
                        userID: member.id,
                    })
                    if (!findUser) {
                        message.channel.send('This user does not yet have a wallet.');
                    } else {
                        var num = Number(findUser.balance);
                        var roundedString = num.toFixed(2);
                        var rounded = Number(roundedString);
                        message.channel.send(`The balance of ${member} is: **$${rounded}**`);
                    }
                }
            } else if (args.length > 1) {
                message.channel.send('Incorrect syntax.');
            }
        }
    }
}