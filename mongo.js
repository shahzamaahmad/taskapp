
const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.MongoClient

const { MongoClient, ObjectID } = require('mongodb')

const url = 'mongodb://127.0.0.1:27017'
const database = 'task-manager'

const id = new ObjectID()
console.log(id.id.length);
console.log(id.toHexString().length);
console.log(id.getTimestamp());

MongoClient.connect(url, { useNewUrlParser: true }, (error, client) => {
  const db = client.db(database)

  db.collection('users').find({ age: 24 }).count((error, users) => {
    console.log(users);
  })

  // db.collection('task').insertMany([
  //   {
  //     desc: 'Clean the house',
  //     completed: true
  //   }, {
  //     desc: 'Shopping',
  //     completed: false
  //   }, {
  //     desc: 'plant',
  //     completed: false
  //   }
  // ], (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert');
  //   }
  //   console.log(result.ops);
  // })

})

// if (error) {
//   return console.log('Unable to connect database');
// }

// console.log('DB Connected');
// const db = client.db(database)

// db.collection('users').insertMany([
// {
//   name: 'Asif',
//   age: 22
// }, {
//   name: 'Subhan',
//   age: 23
// }], (error, result) => {
//   if (error) {
//     return console.log('Unable to insert');
//   }
//   console.log(result.ops);

// })