require("dotenv").config();
const fs = require("fs");
const { Client, Collection, GatewayIntentBits, Partials } = require("discord.js")

const client = new Client({
    intents: [
      GatewayIntentBits.AutoModerationConfiguration,
      GatewayIntentBits.DirectMessageTyping,
      GatewayIntentBits.GuildEmojisAndStickers,
      GatewayIntentBits.GuildMembers,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.GuildVoiceStates,
      GatewayIntentBits.MessageContent,
      GatewayIntentBits.AutoModerationExecution,
      GatewayIntentBits.DirectMessages,
      GatewayIntentBits.GuildIntegrations,
      GatewayIntentBits.GuildMessageReactions,
      GatewayIntentBits.GuildMessageReactions,
      GatewayIntentBits.GuildWebhooks,
      GatewayIntentBits.DirectMessageReactions,
      GatewayIntentBits.GuildBans,
      GatewayIntentBits.GuildInvites,
      GatewayIntentBits.GuildMessageTyping,
      GatewayIntentBits.GuildScheduledEvents,
      GatewayIntentBits.Guilds,
    ],
    partials: [
      Partials.User,
      Partials.Channel,
      Partials.GuildMember,
      Partials.Message,
      Partials.Reaction,
      Partials.GuildScheduledEvent,
      Partials.ThreadMember,
    ]
  })
client.commands = new Collection();

//Loading Events
fs.readdir(__dirname + "/events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    const event = require(__dirname + `/events/${file}`);
    let eventName = file.split(".")[0];
    console.log(`Loaded EVENT: '${eventName}'`);
    client.on(eventName, event.bind(null, client));
  });
});

//Loading Commands
fs.readdir('./commands/', async (err, files) => {
	if (err) return console.error;
	files.forEach(file => {
		if (!file.endsWith('.js')) return;
		let props = require(`./commands/${file}`);
		let cmdName = file.split('.')[0];
		console.log(`Loaded COMMAND: '${cmdName}'`);
		client.commands.set(cmdName, props);
	});
});

client.login(process.env.token)