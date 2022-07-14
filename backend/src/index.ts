import app from './server'
import mongoose, { ConnectOptions } from 'mongoose'
import config from './config/config'
import dotenv from 'dotenv'

let conn: Promise<typeof mongoose>;

async function main(){ 
  dotenv.config()
  const port = config.PORT;
  const uri_connect = (config.MONGO_URI === 'undefined') ? `mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}` : config.MONGO_URI

  try{
    const mongooseOptions : ConnectOptions = {
      //connectTimeoutMS: 2000,
    }

    await mongoose.connect(uri_connect, mongooseOptions)
    console.log(`connected to ${config.MONGO_DATABASE}`)

    app.listen(port, ()=>{
        console.log(`[Running] in http://localhost:${port}/`);
    })
  }catch(err){
    console.error(err);
    process.exit(1);        
  }
}

main()
  .catch(console.error)
  .finally(()=>{
      //conn.disconnect()
  })