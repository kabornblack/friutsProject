const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB", { useNewUrlParser: true});

//Fruits schema
const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name field is compolsory"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "Peach",
  rating: 7,
  review: "Lovely and very nice"
});

// fruit.save();


////////////////////////////////many fruits//////////////////////////////////
// const orange = new Fruit({
//   name: "Orange",
//   rating: 7,
//   review: "sour but good for the body"
// });
// const banana = new Fruit({
//   name: "Banan",
//   rating: 9,
//   review: "Best ever"
// });
// const kiwi = new Fruit({
//   name: "Kiwi",
//   rating: 10,
//   review: "Never been better"
// });

// //////////// //////////////////////To insertMany friuts at once//////////
// Fruit.insertMany([orange, banana, kiwi])
//   .then(() => {
//     console.log('Data inserted successfully.');
//   })
//   .catch((error) => {
//     console.error('Error inserting data:', error);
//   });

// //////////////////////////////////To find friuts/////////////////////
Fruit.find({})
  .then((fruits) => {
     console.log('All fruits:', fruits);
     // mongoose.connection.close();
  })
  .catch((err) => {
    console.error('Error finding fruits:', err);
  });

/////////To get just the names of each fruiton the collection//////////
  Fruit.find({})
    .then((fruits) => {
      // console.log('All fruits:', fruits);
      fruits.forEach(function(fruit) {
        console.log(fruit.name);
      })
      // mongoose.connection.close();
    })
    .catch((err) => {
      console.error('Error finding fruits:', err);
    });

// ///////////////////////////////////////To update one document///////////
Fruit.updateOne({_id: "64650a45b6c0cb4e65a97889"}, {name: "Banana"})
  .then(() => {
    console.log("Document updated successfully.");
  })
  .catch((error) => {
    console.error("Error updating document:", error);
  });

//////////////////////////////////////To delete a document/////////////
Fruit.deleteOne({_id: "6465046b359ef7985868da0b"})
  .then(() => {
    console.log("Document deleted successfully.");
  })
  .catch((error) => {
    console.error("Error deleting document:", error);
  });


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

// person.save();
