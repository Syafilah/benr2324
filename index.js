const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.use(express.json())


//new user registration
app.post('/register', (req, res) => {
    console.log(req.body);
    res.send('User registered successfully');
})

//find one
app.get('/findone', (req, res) => {
    res.send('Find one user');
})
//get user profile
app.get('/profile', (req, res) => {
    res.send('User profile');
})
//update user profile
app.patch('/profile', (req, res) => {
    console.log(req.body);
    res.send('Profile updated successfully');
})
//delete user profile
app.delete('/profile', (req, res) => {
    res.send('Profile deleted successfully');
})

//


app.listen(port, () => {
   console.log(`Example app listening on port ${port}`)
})



const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Syaf:Hermitrecluse1@cluster0.22vxzwe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
