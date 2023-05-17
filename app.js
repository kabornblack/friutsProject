const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB", { useNewUrlParser: true});

//Fruits schema
const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "Apple",
  rating: 7,
  review: "Pretty good for a Fruit"
});

// fruit.save();

const orange = new Fruit({
  name: "Orange",
  rating: 7,
  review: "sour but good for the body"
});
const banana = new Fruit({
  name: "Banan",
  rating: 9,
  review: "Best ever"
});
const kiwi = new Fruit({
  name: "Kiwi",
  rating: 10,
  review: "Never been better"
});

Fruit.insertMany([orange, banana, kiwi])
  .then(() => {
    console.log('Data inserted successfully.');
  })
  .catch((error) => {
    console.error('Error inserting data:', error);
  });
//
// Fruit.insertMany([orange, banana, kiwi], function(err){
//   if (err){
//     console.log(err)
//   } else {
//     console.log("Successfully inserted new friuts to fruitsDB");
//   }
// });


//People schema
const personSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
  name: "John",
  age: 37
});

person.save();
