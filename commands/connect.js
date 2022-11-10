const { QuickDB } = require('quick.db')
const db = new QuickDB();

const { verify } = require('bloxflipapi')

module.exports = {
    info: {
        name: "connect",
        description: "",
        usage: "",
        aliases: []
    },

    run: async function(client, message, args){

if(!args[0]) return

if(await verify(args[0]).catch(console.error) === false) return

//now do node index.js

db.set(`auth_${message.author.id}`, args[0])

    }
}