// Buat Lu Yang Jual Sc Ini Yang Jujur Jangan Samp Nipu Apalagi Lari Dari Tanggung Jawab

// Base Haikal Hw Mods : Copyan Dari Base Dika


const fs = require('fs')
const chalk = require('chalk')
const tiktok = require("./baseikal/download/tiktok")
const facebook = require("./baseikal/download/facebook")
const instagram = require("./baseikal/download/instagram")
const twitter = require("./baseikal/download/twitter")


//MODULNYA BY HW
global.baileys = require('@whiskeysockets/baileys') 
global.adiwajshing = require('@adiwajshing/baileys') 

global.gr = 'https://chat.whatsapp.com/GRuUvhCqhHK08msKMadAji'
global.ig = '@mr_juice7' // ubah aja
global.email = 'mrjuice017@gmail.com' //serah
global.region = 'New York' // serah
//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'ᴹᴿ᭄ ᴊᴜɪᴄᴇོ ×፝֟͜×' //ubah jadi nama mu, note tanda ' gausah di hapus!
//=================================================//
global.owner = ['-'] // ubah aja pake nomor lu
//==========================BY Hw Mods=======================//
global.keyopenai = `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`
//====================BY Hw Mods=============================//
global.botname = 'War Machine' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.packname = '© BayMax Bot INC' // ubah aja ini nama sticker
global.author = 'Mr Juice' // ubah aja ini nama sticker
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'haikal' //Gausah Juga
global.sp = '⭔' // Gausah Juga
global.wlcm = []
global.wlcmm = []
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 10
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})