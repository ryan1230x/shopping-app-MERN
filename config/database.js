const mongoose = require('mongoose');

const DatabaseConnection = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useCreateIndex:true,
            useUnifiedTopology:true               
        });
        console.log(`MongoDB Connected Sucessfully: ${conn.connection.host}`.cyan.bold);
    } catch (err) {
        console.log(`Error: ${err.message}`.red.bold);
        process.exit(1);
    }
}
module.exports = DatabaseConnection;