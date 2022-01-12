const profileModel = require("../models/profileSchema");

module.exports = {
  name: "balance",
  description: "Check user balance.",
  permissions: ["SEND_MESSAGES"],
  async execute(message, args, cmd, client, Discord, profileData) {

    if (!profileData) {
      message.channel.send('Wallet created. Please attempt the command again.');
    } else {
      const member = message.guild.members.cache.get(args[0]);
      if (args.length < 1) {
        var num = Number(profileData.balance);
        var roundedString = num.toFixed(2);
        var rounded = Number(roundedString);
        message.channel.send(`Your wallet balance is **$${rounded}**`);
      } else if (args.length > 0) {
        message.channel.send('This command does not exist.');
      }
    }
  }
}