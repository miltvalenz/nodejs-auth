const mongoose  = require('mongoose');
const url       = process.env.MONGODB;

/**
 * Database connection
 */
mongoose.connect(url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(db => console.log('DB is connected'))
.catch(err => console.log(err));