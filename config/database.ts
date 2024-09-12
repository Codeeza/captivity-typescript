import mongoose from 'mongoose';

let connected = false;

const connectDB = async () => {
  mongoose.set('strictQuery', true);

  // If the database is already connected, don't connect again
  if (connected) {
    console.log('MongoDB is already connected...');
    return;
  }

  // Get the MongoDB URI from environment variables
  const uri = process.env.MONGODB_URI;

  // Check if the URI is defined
  if (!uri) {
    console.error('MongoDB URI is not defined');
    return;
  }

  // Connect to MongoDB
  try {
    await mongoose.connect(uri);
    connected = true;
    console.log('MongoDB connected...');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

export default connectDB;
