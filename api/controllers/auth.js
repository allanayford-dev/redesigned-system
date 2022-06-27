'use Strict'
const bcrypt = require('bcryptjs');

/// router.post('/signup', authController.register);

register = async (req, res) => {
  try {
    const user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      username: req.body.username,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, process.env.BCRYPT_SALT),
      created: new Date(),
      modified: new Date()
    });
    user.save((err, user) => {
      if (err) {
        res.send(400).json({
          result: 'Error: Saving User.',
          message: err
        });
      }
      if (req.body.roles) {
        Role.find({
          name: { $in: req.body.roles }
        }, (err, roles) => {
          if (err) {
            res.send(400).json({
              result: 'Error: Finding Roles.',
              message: err
            });
          }
          user.roles = roles.map(role => role._id);
          user.save(err => {
            if (err) {
              res.send(400).json({
                result: 'Error: Saving user roles.',
                message: err
              })
            }
            res.status(201).json()({
              result: 'Success: New User Created.',
              message: 'User was successfully registered!'
            })
          });
        })
      }

    });

  } catch (err) {
    if (err) {
      res.send(500).json({
        message: err
      });
    }
  }
}

/// router.post('/signin', authController.login);

login = async (req, res) => {
  try {

  } catch (err) {
    if (err) {
      res.send(500).json({
        message: err
      });
    }
  }
}

/// router.delete('/signout', authController.logout);

register = async (req, res) => {
  try {

  } catch (err) {
    if (err) {
      res.send(500).json({
        message: err
      });
    }
  }
}

module.exports = {
  register,
  login,
  logout
}