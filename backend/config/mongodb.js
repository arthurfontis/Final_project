const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/knowledge_stats')
    .then(() => console.log('MongoDB conectado com sucesso'))
    .catch(err => {
        console.error('Erro ao conectar no MongoDB:', err)
    })