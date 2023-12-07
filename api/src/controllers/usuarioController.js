const usuarioModel = require('../models/usuarioModel');

class usuarioController {
  async createUsuario(req, res) {
    const { matricula, senha } = req.body;

    try {
      const usuario = await usuarioModel.createUsuario(matricula, senha);
      delete usuario.senha;

      res.status(201).json(usuario);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'erro' });
    }
  }

  async loginUsuario(req, res) {
    const { matricula, senha } = req.body;

    try {
      const result = await usuarioModel.loginUsuario(matricula, senha);
      res.json(result);
    } catch (error) {
      console.error(error);
      res.status(401).json({ error: error.message });
    }
  }
}

module.exports = new usuarioController();