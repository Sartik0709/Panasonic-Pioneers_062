import mongoose from "mongoose"

const connectToDB = async(url)=>{
    try {
        console.log("Successfully connected to DB");
        await mongoose.connect(url)
    } catch (error) {
       console.log("error while connecting to DB:", error.message); 
    }
}
export default connectToDB;