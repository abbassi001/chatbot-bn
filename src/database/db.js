import mongoose from "mongoose";

mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

mongoose.connection.on("error", (error) =>{
    console.log("Error", error);
})

mongoose.connection.on("connected", (err, res) =>{
    console.log("database is connected")
})

