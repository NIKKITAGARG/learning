import { MongoClient } from "mongodb";
import {mongoose} from "mongoose";

export async function dbConnection(){
    
    const connectionString = process.env.ATLAS_URI || "";
    try{
      mongoose.connect(
          // "mongodb://localhost:27017"
          // `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster2.skbgysj.mongodb.net/?retryWrites=true&w=majority`
          connectionString
          
      );
      mongoose.connection.on("error", (error) => {
          throw new Error(`unable to connect to database: ${error}`);
      });
  } catch (error) {
      throw new Error(`unable to connect to database: $(error)`);
  }
    
}
