const express = require("express"); 
const { connection } = require("./controllers/connection");
const { TokenRoute } = require("./routes/token.route"); 
const cors = require("cors");

require("dotenv").config();
const app = express();
app.use(cors());

app.use(express.json()); 
app.use("/token",TokenRoute );

const PORT = process.env.PORT;

app.get("/", async(req,res)=>{
   try {
     res.send("Welcome to Matrix lab")
   } catch (error) {
     res.send("Error in the server")
   }
})
app.listen(PORT, async () => {
    console.log(PORT)
  try {
    await connection;
    console.log("connected");
  } catch (error) {
    console.log("error");
  }
  console.log("connected to db");
});