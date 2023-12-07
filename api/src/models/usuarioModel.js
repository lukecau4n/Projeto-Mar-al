const db = require('../database/db');
const jwt = require('jsonwebtoken');

class usuarioModel {
  async createUsuario(matricula, senha) {
    const query = 'INSERT INTO usuario (matricula, senha) VALUES ($1, $2) RETURNING *';
    const values = [matricula, senha];

    try {
      const result = await db.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }

  async loginUsuario(matricula, senha) {
    const query = 'SELECT * FROM usuario WHERE matricula = $1 AND senha = $2';
    const values = [matricula, senha];

    try {
      const result = await db.query(query, values);

      if (result.rows.length === 0) {
        throw new Error('usuario ou senha invalidos');
      }

      const user = result.rows[0];
      const token = jwt.sign({ userId: user.id }, 'aksjdpolikchpiaodkjkl', { expiresIn: '1h' });

      return { token };
    } catch (error) {
      throw { message: error.message, status: 500 };
    }
  }
}

module.exports = new usuarioModel();