let cloudscraper = require('cloudscraper')

const crypto = require('crypto');
const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

const { Random } = require('random-js')
const random = new Random();

const _ = require('underscore')

function areEqual(arr1, arr2)
    {
        let N = arr1.length;
        let M = arr2.length;
 
        if (N != M)
            return false;
 
        arr1.sort();
        arr2.sort();

        for (let i = 0; i < N; i++)
            if (arr1[i] != arr2[i])
                return false;
 
        return true;
    }
//put ur bot token here = 
//make a folder called commands and put this file inside it, rename this file to pmines, rename this file to pmines
module.exports = {
    info: {
        name: "pmines",
        description: "",
        usage: "",
        aliases: []
    },

    run: async function(client, message, args){

        let token = 'token' //<-- bloxflip token here

        let data = JSON.parse(await cloudscraper.get({
            uri: 'https://api.bloxflip.com/games/mines',
            headers: { 'x-auth-token': token }
        }))

        if(data?.hasGame === false) {
            message.reply('No active mines game')
        } else {

            var guessRandom1 = [random.integer(60, 85), random.integer(50, 65), random.integer(30, 50), random.integer(20, 30), random.integer(3, 15)]
            var guessRandom = 0;
            
            if(data.game.minesAmount < 4) guessRandom = guessRandom1[0]
            if(data.game.minesAmount >= 4 && data.game.minesAmount < 6) guessRandom = guessRandom1[1]
            if(data.game.minesAmount >= 6 && data.game.minesAmount < 10) guessRandom = guessRandom1[2]
            if(data.game.minesAmount >= 10 && data.game.minesAmount < 20) guessRandom = guessRandom1[3]
            if(data.game.minesAmount >= 20) guessRandom = guessRandom1[4]

            let current_clicked = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
            let to_click = [];
            let yes_click = [];

            let five = ['❓', '❓', '❓', '❓', '❓', '❓', '❓', '❓', '❓', '❓', '❓', '❓', '❓', '❓', '❓', '❓', '❓', '❓', '❓', '❓', '❓', '❓', '❓', '❓', '❓']

            var i2 = 0;

            new_uuid = crypto
            .createHash('sha512')
            .update(`${data.game.uuid}`)
            .digest('hex');

            while(to_click.length < 5) {
                let crnt = parseInt(new_uuid.substring(i2 * 3, i2 * 4 + 8), 14);

                console.log(crnt)

                if(i2 >= new_uuid.length) new_uuid = crypto
                .createHash('sha512')
                .update(`${data.game.uuid}${data.game.nonce}`)
                .digest('hex');
                if(i2 >= new_uuid.length) i2 = 0;
                if(i2 >= new_uuid.length) continue;

                if(crnt > 24 || crnt < 0) i2++
                if(crnt > 24 || crnt < 0) continue;

                if(to_click.includes(crnt)) i2++
                if(to_click.includes(crnt)) continue;

                to_click.push(crnt)
                i2++
            }

            five[to_click[0]] = '✅'
            five[to_click[1]] = '✅'
            five[to_click[2]] = '✅'
            five[to_click[3]] = '✅'

            let five1 = `${five[0]}${five[1]}${five[2]}${five[3]}${five[4]}\n${five[5]}${five[6]}${five[7]}${five[8]}${five[9]}\n${five[10]}${five[11]}${five[12]}${five[13]}${five[14]}\n${five[15]}${five[16]}${five[17]}${five[18]}${five[19]}\n${five[20]}${five[21]}${five[22]}${five[23]}${five[24]}`

            const first = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId('0')
                    .setEmoji(five[0])
					.setStyle(ButtonStyle.Success),
                    new ButtonBuilder()
					.setCustomId('1')
                    .setEmoji(five[1])
					.setStyle(ButtonStyle.Success),
                    new ButtonBuilder()
					.setCustomId('2')
                    .setEmoji(five[2])
					.setStyle(ButtonStyle.Success),
                    new ButtonBuilder()
					.setCustomId('3')
                    .setEmoji(five[3])
					.setStyle(ButtonStyle.Success),
                    new ButtonBuilder()
					.setCustomId('4')
                    .setEmoji(five[4])
					.setStyle(ButtonStyle.Success),
			);
            const second = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId('5')
                    .setEmoji(five[5])
					.setStyle(ButtonStyle.Success),
                    new ButtonBuilder()
					.setCustomId('6')
                    .setEmoji(five[6])
					.setStyle(ButtonStyle.Success),
                    new ButtonBuilder()
					.setCustomId('7')
                    .setEmoji(five[7])
					.setStyle(ButtonStyle.Success),
                    new ButtonBuilder()
					.setCustomId('8')
                    .setEmoji(five[8])
					.setStyle(ButtonStyle.Success),
                    new ButtonBuilder()
					.setCustomId('9')
                    .setEmoji(five[9])
					.setStyle(ButtonStyle.Success),
			);
            const third = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId('10')
                    .setEmoji(five[10])
					.setStyle(ButtonStyle.Success),
                    new ButtonBuilder()
					.setCustomId('11')
                    .setEmoji(five[11])
					.setStyle(ButtonStyle.Success),
                    new ButtonBuilder()
					.setCustomId('12')
                    .setEmoji(five[12])
					.setStyle(ButtonStyle.Success),
                    new ButtonBuilder()
					.setCustomId('13')
                    .setEmoji(five[13])
					.setStyle(ButtonStyle.Success),
                    new ButtonBuilder()
					.setCustomId('14')
                    .setEmoji(five[14])
					.setStyle(ButtonStyle.Success),
			);
            const fourth = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId('15')
                    .setEmoji(five[15])
					.setStyle(ButtonStyle.Success),
                    new ButtonBuilder()
					.setCustomId('16')
                    .setEmoji(five[16])
					.setStyle(ButtonStyle.Success),
                    new ButtonBuilder()
					.setCustomId('17')
                    .setEmoji(five[17])
					.setStyle(ButtonStyle.Success),
                    new ButtonBuilder()
					.setCustomId('18')
                    .setEmoji(five[18])
					.setStyle(ButtonStyle.Success),
                    new ButtonBuilder()
					.setCustomId('19')
                    .setEmoji(five[19])
					.setStyle(ButtonStyle.Success),
			);
            const fifth = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId('20')
                    .setEmoji(five[20])
					.setStyle(ButtonStyle.Success),
                    new ButtonBuilder()
					.setCustomId('21')
                    .setEmoji(five[21])
					.setStyle(ButtonStyle.Success),
                    new ButtonBuilder()
					.setCustomId('22')
                    .setEmoji(five[22])
					.setStyle(ButtonStyle.Success),
                    new ButtonBuilder()
					.setCustomId('23')
                    .setEmoji(five[23])
					.setStyle(ButtonStyle.Success),
                    new ButtonBuilder()
					.setCustomId('24')
                    .setEmoji(five[24])
					.setStyle(ButtonStyle.Success),
			);

            let msg = await message.reply({
                embeds: [{
                    fields: [
                        {
                            name: `Accuracy`,
                            value: `\`${guessRandom}%\``,
                            inline: true
                        },
                        {
                            name: 'Round Id',
                            value: `\`${data.game.uuid}\``,
                            inline: true
                        }
                    ],
                    footer: {
                        text: `Made by mage`
                    }
                }],
                components: [first, second, third, fourth, fifth]
            })

            let timedCheck = 0

            var myInterval = setInterval(async function() {
                if (timedCheck >= 600000) clearInterval(myInterval); 
                if (timedCheck >= 600000) msg.edit({
                    embeds: [{
                        fields: [
                            {
                                name: `Accuracy`,
                                value: `\`${guessRandom}%\``,
                                inline: true
                            },
                            {
                                name: 'Round Id',
                                value: `\`${data.game.uuid}\``,
                                inline: true
                            },
                            {
                                name: 'Game ended',
                                value: `\`Timed Out\``,
                            }
                        ],
                        footer: {
                            text: `Made by mage`
                        }
                    }],
                })
                if (timedCheck >= 600000) return

                let new_data = JSON.parse(await cloudscraper.get({
                    uri: 'https://api.bloxflip.com/games/mines',
                    headers: { 'x-auth-token': token }
                }))

                if (new_data.hasGame === false) clearInterval(myInterval);
                if (new_data.hasGame === false) msg.edit({
                    embeds: [{
                        fields: [
                            {
                                name: `Accuracy`,
                                value: `\`${guessRandom}%\``,
                                inline: true
                            },
                            {
                                name: 'Round Id',
                                value: `\`${data.game.uuid}\``,
                                inline: true
                            },
                            {
                                name: 'Game ended',
                                value: `\`Cashed Out/Bomb Exploded\``,
                            }
                        ],
                        footer: {
                            text: `Made by mage`
                        }
                    }],
                })
                if (new_data.hasGame === false) return

                if(areEqual(new_data.game.uncoveredLocations, yes_click)) {

                } else {
                    for(var i of new_data.game.uncoveredLocations) {
                     current_clicked[i] = true;   
                    }

                    yes_click=new_data.game.uncoveredLocations

                    const first1 = new ActionRowBuilder()
                    .addComponents(
                        new ButtonBuilder()
                            .setCustomId('0')
                            .setEmoji(five[0])
                            .setStyle(ButtonStyle.Success)
                            .setDisabled(current_clicked[0]),
                            new ButtonBuilder()
                            .setCustomId('1')
                            .setEmoji(five[1])
                            .setStyle(ButtonStyle.Success)
                            .setDisabled(current_clicked[1]),
                            new ButtonBuilder()
                            .setCustomId('2')
                            .setEmoji(five[2])
                            .setStyle(ButtonStyle.Success)
                            .setDisabled(current_clicked[2]),
                            new ButtonBuilder()
                            .setCustomId('3')
                            .setEmoji(five[3])
                            .setStyle(ButtonStyle.Success)
                            .setDisabled(current_clicked[3]),
                            new ButtonBuilder()
                            .setCustomId('4')
                            .setEmoji(five[4])
                            .setStyle(ButtonStyle.Success)
                            .setDisabled(current_clicked[4]),
                    );
                    const second1 = new ActionRowBuilder()
                    .addComponents(
                        new ButtonBuilder()
                            .setCustomId('5')
                            .setEmoji(five[5])
                            .setStyle(ButtonStyle.Success)
                            .setDisabled(current_clicked[5]),
                            new ButtonBuilder()
                            .setCustomId('6')
                            .setEmoji(five[6])
                            .setStyle(ButtonStyle.Success)
                            .setDisabled(current_clicked[6]),
                            new ButtonBuilder()
                            .setCustomId('7')
                            .setEmoji(five[7])
                            .setStyle(ButtonStyle.Success)
                            .setDisabled(current_clicked[7]),
                            new ButtonBuilder()
                            .setCustomId('8')
                            .setEmoji(five[8])
                            .setStyle(ButtonStyle.Success)
                            .setDisabled(current_clicked[8]),
                            new ButtonBuilder()
                            .setCustomId('9')
                            .setEmoji(five[9])
                            .setStyle(ButtonStyle.Success)
                            .setDisabled(current_clicked[9]),
                    );
                    const third1 = new ActionRowBuilder()
                    .addComponents(
                        new ButtonBuilder()
                            .setCustomId('10')
                            .setEmoji(five[10])
                            .setStyle(ButtonStyle.Success)
                            .setDisabled(current_clicked[10]),
                            new ButtonBuilder()
                            .setCustomId('11')
                            .setEmoji(five[11])
                            .setStyle(ButtonStyle.Success)
                            .setDisabled(current_clicked[11]),
                            new ButtonBuilder()
                            .setCustomId('12')
                            .setEmoji(five[12])
                            .setStyle(ButtonStyle.Success)
                            .setDisabled(current_clicked[12]),
                            new ButtonBuilder()
                            .setCustomId('13')
                            .setEmoji(five[13])
                            .setStyle(ButtonStyle.Success)
                            .setDisabled(current_clicked[13]),
                            new ButtonBuilder()
                            .setCustomId('14')
                            .setEmoji(five[14])
                            .setStyle(ButtonStyle.Success)
                            .setDisabled(current_clicked[14]),
                    );
                    const fourth1 = new ActionRowBuilder()
                    .addComponents(
                        new ButtonBuilder()
                            .setCustomId('15')
                            .setEmoji(five[15])
                            .setStyle(ButtonStyle.Success)
                            .setDisabled(current_clicked[15]),
                            new ButtonBuilder()
                            .setCustomId('16')
                            .setEmoji(five[16])
                            .setStyle(ButtonStyle.Success)
                            .setDisabled(current_clicked[16]),
                            new ButtonBuilder()
                            .setCustomId('17')
                            .setEmoji(five[17])
                            .setStyle(ButtonStyle.Success)
                            .setDisabled(current_clicked[17]),
                            new ButtonBuilder()
                            .setCustomId('18')
                            .setEmoji(five[18])
                            .setStyle(ButtonStyle.Success)
                            .setDisabled(current_clicked[18]),
                            new ButtonBuilder()
                            .setCustomId('19')
                            .setEmoji(five[19])
                            .setStyle(ButtonStyle.Success)
                            .setDisabled(current_clicked[19]),
                    );
                    const fifth1 = new ActionRowBuilder()
                    .addComponents(
                        new ButtonBuilder()
                            .setCustomId('20')
                            .setEmoji(five[20])
                            .setStyle(ButtonStyle.Success)
                            .setDisabled(current_clicked[20]),
                            new ButtonBuilder()
                            .setCustomId('21')
                            .setEmoji(five[21])
                            .setStyle(ButtonStyle.Success)
                            .setDisabled(current_clicked[21]),
                            new ButtonBuilder()
                            .setCustomId('22')
                            .setEmoji(five[22])
                            .setStyle(ButtonStyle.Success)
                            .setDisabled(current_clicked[22]),
                            new ButtonBuilder()
                            .setCustomId('23')
                            .setEmoji(five[23])
                            .setStyle(ButtonStyle.Success)
                            .setDisabled(current_clicked[23]),
                            new ButtonBuilder()
                            .setCustomId('24')
                            .setEmoji(five[24])
                            .setStyle(ButtonStyle.Success)
                            .setDisabled(current_clicked[24]),
                    );

                    msg.edit({
                        embeds: [{
                            fields: [
                                {
                                    name: `Accuracy`,
                                    value: `\`${guessRandom}%\``,
                                    inline: true
                                },
                                {
                                    name: 'Round Id',
                                    value: `\`${data.game.uuid}\``,
                                    inline: true
                                }
                            ],
                            footer: {
                                text: `Made by Mage`
                            }
                        }],
                        components: [first1, second1, third1, fourth1, fifth1]
                    })

                    timedCheck=timedCheck+100;

                }

              }, 100);

        }

    }
}
