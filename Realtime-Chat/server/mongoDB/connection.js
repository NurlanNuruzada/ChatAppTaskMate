import mongoose from "mongoose";

const mongoDBConnect = () => {
  try {
    mongoose.connect("mongodb+srv://nurlangn:pzTjlxRMP7Ztvz9h@cluster0.onifu1m.mongodb.net/", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("MongoDB - Connected");
  } catch (error) {
    console.log("Error - MongoDB Connection " + error);
  }
};

export default mongoDBConnect;
