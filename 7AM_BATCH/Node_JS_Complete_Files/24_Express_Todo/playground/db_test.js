const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'TodoApp';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function(err) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    insertDocuments(db, function() {
        client.close();
    });
    client.close();
});

const insertDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('todos');
    // Insert some documents
    collection.insertOne(
        {item : "Get Some Flowers"}
    , function(err, result) {
        console.log("Inserted 1 documents into the collection");
        callback(result);
    });
};