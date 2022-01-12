// module.exports = async(client) => {
//     const guild = client.guilds.cache.get('928366721167929374');
//     setInterval(() => {
//         const memberCount = guild.memberCount;
//         const channel = guild.channels.cache.get('929065542751506492');

//         channel.setName(`Total Members: ${memberCount.toLocaleString()}`);
//         console.log('Updating member count.')
//     }, 1800000);
// }