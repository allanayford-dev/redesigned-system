const mongoose = require('mongoose');

/*  
  firstName: req.body.firstName,
  lastName: req.body.lastName,
  username: req.body.username,
  email: req.body.email,
  password: bcrypt.hashSync(req.body.password, process.env.BCRYPT_SALT),
  created: new Date(),
  modified: new Date() 
*/

const userSchema = new mongoose.Schema({
  firstName: { type: String, default: null },
  lastName: { type: String, default: null },
  username: { type: String, unique: true },
  email: { type: String, unique: true },
  password: { type: String },
  created: { type: Date, default: new Date() }
});

module.exports = mongoose.model("user", userSchema)