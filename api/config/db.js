import mongoose from "mongoose";

// MongoDb Connection
const mongoDbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDb Connection Successfull`.bgYellow.black);
  } catch (error) {
    console.log(`${error.message}`.bgRed.black);
  }
};

// export
export default mongoDbConnection;
