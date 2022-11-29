const express = require("express");
const router = require("./routes/routes");
const app = express();
app.use(express.json());
require('dotenv').config();
const db = require('./db/database');
const errorHandler = require("./middlewares/error_handler");
app.use('/api/v1/tasks',router)



app.use(errorHandler)


const port = process.env.PORT|| 3000;
const start = async ()=>{
    try {
        await db(process.env.MONGO_URL);
        app.listen(port,()=>{
            console.log('listening at port '+port);
        });

    } catch (error) {
        console.log(error);
    }    
}    

start()












