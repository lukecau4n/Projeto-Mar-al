const db = require('../database/db');

class ProdutoModel {
  async getProdutos() {
    const query = 'SELECT * FROM produtos';
    try {
      const result = await db.query(query);
      return result.rows;
    } catch (error) {
      throw error;
    }
  }

  async getProdutoById(id) {
    const query = 'SELECT * FROM produtos WHERE id = $1';

    try {
      const result = await db.query(query, [id]);
      const produto = result.rows[0];
      return produto;
    } catch (error) {
      console.error('Erro ao obter detalhes do produto pelo ID:', error);
      throw new Error('Erro interno do servidor');
    }
  }

async getProdutosByName(nome) {
  try {
    const query = 'SELECT * FROM produtos WHERE nome LIKE $1';
    const values = [`%${nome}%`];

    const result = await db.query(query, values);
    const produtos = result.rows;

    return produtos;
  } catch (error) {
    console.error(error);
    throw new Error('Erro ao buscar produtos por nome');
  }
}

  async createProduto(nome, valor, categoria, quantidade) {
    const query = 'INSERT INTO produtos (nome, valor, categoria, quantidade) VALUES ($1, $2, $3, $4) RETURNING *';
    const values = [nome, valor, categoria, quantidade];

    try {
      const result = await db.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }

  async updateProduto(id, nome, valor, categoria, quantidade) {
    const query = 'UPDATE produtos SET nome = $2, valor = $3, categoria = $4, quantidade = $5 WHERE id = $1 RETURNING *';
    const values = [id, nome, valor, categoria, quantidade];

    try {
      const result = await db.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }

  async deleteProduto(id) {
    const query = 'DELETE FROM produtos WHERE id = $1 RETURNING *';
    const values = [id];

    try {
      const result = await db.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new ProdutoModel();