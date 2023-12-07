const jwt = require('jsonwebtoken');

function authToken(req, res, next) {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ error: 'token indisponivel' });

  jwt.verify(token, 'aksjdpolikchpiaodkjkl', (err, user) => {
    if (err) return res.status(403).json({ error: 'token invalido' });
    req.user = user;
    next();
  });
}

module.exports = { authToken };