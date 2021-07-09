  
const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const user = "admin"
        const password = "09876"
        const url = `mongodb+srv://${user}:${password}@cluster0.xvihv.mongodb.net/carstore?retryWrites=true&w=majority`
        const conn = await mongoose.connect(url, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        })

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
}

module.exports = connectDB