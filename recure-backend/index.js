const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(express.urlencoded({ extended: true }));
const appointmentRoute = require("/routes/appointmentRoute");
app.use(appointmentRoute);
const usersRoute = require("/routes/usersRoute");
app.use(usersRoute);
const port = process.env.PORT || 5000;
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
  })
);

const jwt = require("jsonwebtoken");
app.use(express.json());
app.get("/", async (req, res) => {
  res.send("hospital server is running");
});
 
 // mongoose setup 

   const connectionDB = ()=>
    { 
      mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.t9lecvs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
  }
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    //collection
    const departmentCollection = client
      .db("recureDB")
      .collection("departments");
    const doctorCollection = client.db("recureDB").collection("doctors");
    const userCollection = client.db("recureDB").collection("users");
    const appointmentCollection = client
      .db("recureDB")
      .collection("appointments");

    // jwt token api

    
    // payments  api

    //  app.post("/payment",async(req,res)=>{

    //    const user = req.body;
    //    const data = {
    //     total_amount: 100,
    //     currency: 'BDT',
    //     tran_id: 'REF123', // use unique tran_id for each api call
    //     success_url: 'http://localhost:3030/success',
    //     fail_url: 'http://localhost:3030/fail',
    //     cancel_url: 'http://localhost:3030/cancel',
    //     ipn_url: 'http://localhost:3030/ipn',
    //     shipping_method: 'Courier',
    //     product_name: 'Computer.',
    //     product_category: 'Electronic',
    //     product_profile: 'general',
    //     cus_name: 'Customer Name',
    //     cus_email: 'customer@example.com',
    //     cus_add1: 'Dhaka',
    //     cus_add2: 'Dhaka',
    //     cus_city: 'Dhaka',
    //     cus_state: 'Dhaka',
    //     cus_postcode: '1000',
    //     cus_country: 'Bangladesh',
    //     cus_phone: '01711111111',
    //     cus_fax: '01711111111',
    //     ship_name: 'Customer Name',
    //     ship_add1: 'Dhaka',
    //     ship_add2: 'Dhaka',
    //     ship_city: 'Dhaka',
    //     ship_state: 'Dhaka',
    //     ship_postcode: 1000,
    //     ship_country: 'Bangladesh',
    // };
    // const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live)
    // sslcz.init(data).then(apiResponse => {
    //     // Redirect the user to payment gateway
    //     let GatewayPageURL = apiResponse.GatewayPageURL
    //     res.redirect(GatewayPageURL)
    //     console.log('Redirecting to: ', GatewayPageURL)
    // });
    //  })
    // appointment related api

    // users related api

    //departments related api

    app.get("/departments", async (req, res) => {
      const result = await departmentCollection.find().toArray();

      res.send(result);
    });
    // doctors api

    app.get("/doctors", async (req, res) => {
      const result = await doctorCollection.find().toArray();
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, async() => {
   await connectionDB()
  console.log(`hospital server is running at ${port}`);
});
