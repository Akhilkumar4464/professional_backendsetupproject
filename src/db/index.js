 import mongoose from 'mongoose';
  import { DB_name} from '../constants.js';


  const connectDB = async () =>
  {
    try {
     const connect=   await mongoose.connect(` ${process.env.MONGODB_URI}/${DB_name}`)
          console.log(`MongoDB Connected... !! ${connect.Connection.host} `);
        
        } catch (error) {
            console.error( " Error connecting to MongoDB", error );
            process.exit(1)

        }

  }
  export default connectDB;