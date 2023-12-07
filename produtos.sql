CREATE TABLE produtos (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  valor FLOAT NOT NULL,
  categoria VARCHAR(255) NOT NULL,
  quantidade INT NOT NULL
);