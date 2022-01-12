module.exports = {
    name: 'tos',
    description: 'Terms of Service',
    permissions: ["MANAGE_MESSAGES"],
    execute(message, args, client) {
        message.channel.send("Please accept the following terms of service before we can proceed.\n"+
        "```1. All unnecessary wealth must be removed from the bank, we are not responsible for any wealth lost before, during or after the service.\n" +
        "2. Do not login while the service is in progress.\n" +
        "3. Change your password upon completion of the service.\n" +
        "4. No refunds once the service has started.\n" +
        "5. All payments must be done up-front and in full.\n" +
        "6. We are not responsible for any bans that might occur, we work with a close group of people that are trusted within our community and trust every account will be taken care of in the safest possible manner.\n" +
        "7. We only give time estimations. There will be no disputes about longevity of the service.\n\n\n" +
        "Please type the following message to proceed: 'I agree to the terms of service.'```")
    }
}