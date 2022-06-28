const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log(`Connection to database has been establised!`);
})
  .catch((error) => {
    console.log(`Error connecting to database: ${error.message}`);
  });