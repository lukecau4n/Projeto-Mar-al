const jwt = require('jsonwebtoken');

class authController {
  async login(req, res) {
    const { matricula } = req.body;

    try {
      const token = jwt.sign({ matricula }, 'aksjdpolikchpiaodkjkl', { expiresIn: '1h' });
      res.json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'erro' });
    }
  }
}

module.exports = new authController();