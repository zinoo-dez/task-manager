const express = require("express");
const app = express();
const tasks = require("./tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
const port = process.env.PORT || 4000;
/* middleware */
app.use(express.json());
/** routes */
app.get("/", (req, res) => {
  res.send("hello world");
});
app.use("/api/v1/tasks", tasks);

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URI);
    app.listen(port, () => console.log(`server running at port 4000`));
  } catch (error) {
    console.log(error);
  }
};
start();
