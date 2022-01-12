// const profileModel = require("../models/profileSchema");
// module.exports = {
//   name: "beg",
//   description: "beg for money",
//   permissions: ["SEND_MESSAGES"],
//   async execute(message, args, cmd, client, Discord, profileData) {
//     const randomNumber = Math.floor(Math.random() * 100) + 1;
//     const response = await profileModel.findOneAndUpdate(
//       {
//         userID: message.author.id,
//       },
//       {
//         $inc: {
//           balance: randomNumber,
//         },
//       }
//     );
//     return message.channel.send(`${message.author.username}, you begged and received ${randomNumber}** from Professor`);
//   },
// };