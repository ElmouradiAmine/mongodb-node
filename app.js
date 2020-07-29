//jshint esversion:6

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'fruitsDB';

// Create a new MongoClient
const client = new MongoClient(url, {
  useUnifiedTopology: true
});

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);


  //insert documents
  // db.collection('fruits').insertMany([{
  //   fruit: "Banana",
  // }, {
  //   fruit: "Lemon",
  // }, ], function(err, r) {
  //   assert.equal(null, err);
  //   assert.equal(2, r.insertedCount);
  //   client.close();
  //
  // });

  //read documents
  // db.collection('fruits').find({}).toArray(function(err, data) {
  //    assert.equal(null, err);
  //    console.log(data);
  //
  //    client.close();
  //  });

  //delete a document
  db.collection('fruits').deleteOne({fruit: 'Apple'}, function(err, data){
    assert.equal(null, err);
    console.log(data);
    client.close();

  });




});
