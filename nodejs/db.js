const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mongo', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (!err) {
        console.log('connect to mongodb');
    } else {
        console.log('sorry mongodb');
    }
})
module.exports = mongoose;