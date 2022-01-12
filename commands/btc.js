module.exports = {
    name: 'btc',
    description: 'Bitcoin Address',
    permissions: ["MANAGE_MESSAGES"],
    execute(message, args, client) {
        message.channel.send("Please send only BITCOIN to this address:\n" + "```3GiK5KVgW9oibKbS3GsSSiHtzPWUkh8e2Q```");
    }
}