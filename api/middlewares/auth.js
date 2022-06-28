const jwt = require('jsonwebtoken');

authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) {
    return res.sendStatus(401);
  };

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }

    req.user = user;
    next();
  });
}

generateAccessToken = (user) => {
  return jwt.sign({ data: user }, process.env.JWT_SECRET, { expiresIn: '15m' });
}

module.exports = {
  authenticateToken,
  generateAccessToken
}