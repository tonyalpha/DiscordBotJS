module.exports = {
    name: 'eth',
    description: 'Ethereum Address',
    permissions: ["MANAGE_MESSAGES"],
    execute(message, args, client) {
        message.channel.send("Please send only ETHEREUM to this address:\n" + "```0x6730BB66F33a224ac5CB2a84dF6791faCD4cdf45```");
    }
}