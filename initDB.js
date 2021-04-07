const dotenv = require('dotenv');
const mongoose = require('mongoose');


module.exports = () => {
  dotenv.config();
  const db_url = process.env.DB_URL;

  mongoose.connect(db_url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
  .then(() => {
    console.log('Connection established with MongoDB!');
  })
  .catch(err => console.error(err.message));

  mongoose.Promise = global.Promise;

  // Finally, we catch the lifecycle states for the db-connection
  mongoose.connection.on('error', (err) => {
    console.error(err.message);
  })

  mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to DB-cluster');
  })

  mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
  })
}