const { ActivityType } = require("discord.js");

module.exports = async (client) => {
    console.log(`[API] Logged in as ${client.user.username}`);
    client.user.setActivity(`bloxflip bets`, { type: ActivityType.Watching })
  }; //found it ??????