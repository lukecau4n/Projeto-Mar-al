CREATE TABLE usuario (
  id SERIAL PRIMARY KEY,
  matricula VARCHAR(255) NOT NULL,
  senha VARCHAR(255) NOT NULL
);

INSERT INTO usuario (matricula, senha) VALUES (123456, 'senha') RETURNING *