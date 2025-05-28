// Script to insert a test admin user into MongoDB
const { MongoClient } = require('mongodb');
require('dotenv').config();

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

async function insertTestAdmin() {
  try {
    await client.connect();
    const db = client.db('Barcelona');
    const adminCollection = db.collection('admin');
    const username = 'admin';
    const password = 'admin123';
    // Remove any existing user with the same username
    await adminCollection.deleteMany({ username });
    // Insert test user
    await adminCollection.insertOne({ username, password });
    console.log('Test admin user inserted:', { username, password });
  } catch (err) {
    console.error('Error inserting test admin:', err);
  } finally {
    await client.close();
  }
}

insertTestAdmin();
