import dotenv from "dotenv";
import connectToDb from "./db/db.js";
import app from "./app.js"

dotenv.config({
    path: './env'
})

const PORT = process.env.PORT || 7000;

connectToDb()
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on ${PORT}`)
    })
})
.catch((err) => {
    console.log("Error in connecting to Db",err)
})