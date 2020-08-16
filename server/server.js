const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routers/routes');

const app = express(); // crio a aplicação com a função express

mongoose.connect('mongodb+srv://@cluster0-ija1l.mongodb.net/casa?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);

app.listen(3333);

 








