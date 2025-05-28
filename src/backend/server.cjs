const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);
let adminCollection;

async function connectDB() {
  try {
    await client.connect();
    const db = client.db('Barcelona');
    adminCollection = db.collection('admin');
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
}
connectDB();

app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await adminCollection.findOne({ username, password });
    if (user) {
      res.json({ success: true });
    } else {
      res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});