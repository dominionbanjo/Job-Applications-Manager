require("dotenv").config();
const connectDB = require("./db/connect");
const mockData = require("./user.json");
const Job = require("./models/Job");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    // await Product.deleteMany();
    await Job.create(mockData);
    console.log("success");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
