const express = require('express')
const cors = require('cors')

const server = express()


server.use(express.static('public'));
server.use(cors())
server.use(express.json())

const sitcoms = [
    "Friends",
    "The Office",
    "Seinfeld",
    "How I Met Your Mother",
    "The Big Bang Theory",
    "Parks and Recreation",
    "Modern Family",
    "The Simpsons",
    "New Girl",
    "Brooklyn Nine-Nine",
    "Two and a Half Men",
    "The Fresh Prince of Bel-Air",
    "The Golden Girls",
    "Cheers",
    "Frasier",
    "That '70s Show",
    "Everybody Loves Raymond",
    "The King of Queens",
    "Full House",
    "Saved by the Bell",
    "Sabrina the Teenage Witch", 
    "Family guy"
]

const sitcomsWithHeader = ['', ...sitcoms]; //Dessa forma, o novo array sitcomsWithHeader terá um elemento vazio no índice 0 e os elementos do array original começarão a partir do índice 1.


// Retorna uma sitcom

server.get('/sitcoms/:index', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*')

    const { index } = req.params

    return res.json(sitcomsWithHeader[index])
})

// Retornar todos os sitcom

server.get('/sitcoms', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*')
    return res.json(sitcomsWithHeader)
})

// Criar um novo sitcom

server.post('/sitcoms', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*')
    const { name } = req.body
    sitcomsWithHeader.push(name)

    return res.json(sitcomsWithHeader)
})

// Atualizar uma sitcom

server.put('/sitcoms/:index', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*')
    const { index } = req.params
    const { name } = req.body

    sitcomsWithHeader[index] = name

    return res.json(sitcomsWithHeader)
})


// Deletar alguma sitcom

server.delete('/sitcoms/:index', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*')
    const { index } = req.params
    sitcomsWithHeader.splice(index, 1)

    return res.json({ message: "A sitcom foi deletada" })
})

server.listen(3000)