import app from './server'
//import {MongoClient} from 'mongodb'

import mongoose, { ConnectOptions } from 'mongoose'
import config from './config/config'

//let client : MongoClient;

async function main(){    
  //client = new MongoClient(config.MONGO_URI);
  const port = config.PORT;

  try{
    //await client.connect();
    const mongooseOptions : ConnectOptions = {
      connectTimeoutMS: 2000,
    }

    await mongoose.connect(`mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`, mongooseOptions)

    app.listen(port, ()=>{
        console.log(`Server is running on port ${port}`);
        console.log(`Go to http://localhost:${port}/`);
    })
  }catch(e){
    console.error(e);
    process.exit(1);        
  }
}

main()
  .catch(console.error)
  .finally(()=>{
      mongoose.connection.close()
  })