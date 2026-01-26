const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/knowledge_stats', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .catch(err => {
        console.error('Erro ao conectar no MongoDB:', err)
    })