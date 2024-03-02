const express = require("express");
const app = express();
require("dotenv").config();
const dbConfig = require("./config/dbConfig");
app.use(express.json());
const userRoute = require("./routes/userRoute");
app.use('/api/users', userRoute);

const port = process.env.PORT || 5000;
//console.log(process.env.MONGO_URL)
app.listen(port, () => {
  console.log(`Node server at port ${port}`);
});
