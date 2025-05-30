const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);
let adminCollection;
const contentCollectionName = 'content';
let contentCollection;

async function connectDB() {
  try {
    await client.connect();
    const db = client.db('Barcelona');
    adminCollection = db.collection('admin');
    contentCollection = db.collection(contentCollectionName);
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

// Save content (news, merch, players)
app.post('/api/content', async (req, res) => {
  const { type, title, description, image } = req.body;
  if (!type || !title || !description) {
    return res.status(400).json({ success: false, message: 'Missing fields' });
  }
  try {
    await contentCollection.insertOne({ type, title, description, image });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Fetch content by type
app.get('/api/content/:type', async (req, res) => {
  const { type } = req.params;
  try {
    const items = await contentCollection.find({ type }).toArray();
    res.json({ success: true, items });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Delete content by id
app.delete('/api/content/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await contentCollection.deleteOne({ _id: new ObjectId(id) });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});