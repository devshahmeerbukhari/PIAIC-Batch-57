import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?: number
}

const connection: ConnectionObject = {}


/*here void mean i dont need to care about the returning data*/
async function dbConnect(): Promise<void>{
    if(connection.isConnected){
        console.log("Already Connected to Database");
        return
    }
    try{
        const db = await mongoose.connect(process.env.MONGODB_URI || '', {})
        connection.isConnected = db.connections[0].readyState
        console.log("DB Connected Successfully")
    } catch(error){
        console.log("Database Connection Failed", error)
        process.exit()
    }
}

export default dbConnect