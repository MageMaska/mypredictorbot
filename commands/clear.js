const { Client, Message, MessageEmbed, Permissions } = require("discord.js")
module.exports = {
    info: {
        name: "clear",
        description: "",
        usage: '',
        aliases: []
    },

    
    run: async (client, message, args) => {
        if(message.member.roles.cache.has('1034217597421490290')){
            if (!args[0])
            return message.channel.send(
                "Please specify a number of messages"
            );
            if (isNaN(args[0])) return message.channel.send("Numbers are only allowed");
            if (parseInt(args[0] > 99))
                return message.channel.send(
                    "The max amount of messages is lower then 100"
                );
            await message.channel
                .bulkDelete(parseInt(args[0]) + 1)
                .catch((err) => console.log(err));
            message.channel.send("Deleted " + args[0] + " messages")
        } else {
            message.channel.send('you dont have perm')
        }
    },    
};