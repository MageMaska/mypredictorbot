
const { QuickDB } = require('quick.db')
const db = new QuickDB();

const crypto = require('crypto');
const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

let cloudscraper = require('cloudscraper')
const bloxflipapi = require('bloxflipapi')

module.exports = {
    info: {
        name: "pbalance",
        description: "",
        usage: "",
        aliases: []
    },

    
    run: async function(client, message, args){
        let token = await db.get(`auth_${message.author.id}`) //<-- bloxflip token here
        let result = await bloxflipapi.balance(token)
        let msg = await message.reply({
            embeds: [{
                fields: [
                    {
                        name: `Your Balance`,
                        value: `${Math.round(result*100)/100}` ,
                        inline: true
                    },
                ],
                footer: {
                    text: `Made by Maska`
                }
            }]
        })
    }
}