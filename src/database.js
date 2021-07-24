const mongoose = require('mongoose');

async function connect(){
    try {
        await mongoose.connect('mongodb+srv://supervision:2UZ8pch61P6i@cluster0.8uy1d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
        {
            useNewUrlParser: true
        });
        console.log('Database: Connected');
    } catch (e) {
        console.log('Something went wrong!');
        console.log(e);
    }
};

module.exports = { connect };