const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_STRING, {});

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;



/*DO NOT UNCOMMENT ------------------*/
// updated database fields
// const db = mongoose.connection;
// const restroomsCollection = db.collection('restrooms'); //
// db.collection('restrooms').updateMany(
//   {}, // Applies to all documents
//   {
//     $rename: {
//       'upvotes': 'Upvotes',
//       'downvotes': 'Downvotes',
//       'flagged': 'Flagged'
//     }
//   }
// );


