module.exports = {
    name: 'ltc',
    description: 'Litecoin Address',
    permissions: ["MANAGE_MESSAGES"],
    execute(message, args, client) {
        message.channel.send("Please send only LITECOIN to this address:\n" + "```MNHhHSEha6xmCKRuVTP8nt3YUtdS67EGiz```");
    }
}