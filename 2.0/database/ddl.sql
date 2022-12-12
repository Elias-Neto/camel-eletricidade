BEGIN;

DROP TABLE IF EXISTS compra_produto;
DROP TABLE IF EXISTS compra;
DROP TABLE IF EXISTS produto_produto;
DROP TABLE IF EXISTS imagem;
DROP TABLE IF EXISTS ficha_tecnica;
DROP TABLE IF EXISTS produto;
DROP TABLE IF EXISTS subcategoria;
DROP TABLE IF EXISTS categoria;
DROP TABLE IF EXISTS endereco;
DROP TABLE IF EXISTS cliente;

CREATE TABLE cliente (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  senha VARCHAR(100) NOT NULL,
  cpf VARCHAR(11) UNIQUE,
  telefone VARCHAR(11) UNIQUE
);

CREATE TABLE endereco (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  id_cliente INTEGER NOT NULL,
  cep VARCHAR(8) NOT NULL, 
  rua VARCHAR(100) NOT NULL,
  bairro VARCHAR(100) NOT NULL,
  numero INTEGER NOT NULL,
  complemento VARCHAR(100),
  cidade VARCHAR(100) NOT NULL,
  uf CHAR(2) NOT NULL,
  CONSTRAINT fk_cliente FOREIGN KEY (id_cliente) REFERENCES cliente(id)
);

CREATE TABLE categoria (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  nome VARCHAR(100) NOT NULL
);

CREATE TABLE subcategoria (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  id_categoria INTEGER NOT NULL,
  nome VARCHAR(100) NOT NULL,
  CONSTRAINT fk_categoria FOREIGN KEY (id_categoria) REFERENCES categoria(id)
);

CREATE TABLE produto (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  nome VARCHAR(100) NOT NULL,
  preco NUMERIC(8,2) NOT NULL,
  descricao VARCHAR(500) NOT NULL,
  -- ficha_tecnica VARCHAR(500) NOT NULL,
  marca VARCHAR(100) NOT NULL,
  disponivel BOOLEAN NOT NULL,
  id_subcategoria INTEGER NOT NULL,
  CONSTRAINT fk_subcategoria FOREIGN KEY (id_subcategoria) REFERENCES subcategoria(id)
);

CREATE TABLE ficha_tecnica (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  id_produto INTEGER NOT NULL,
  chave VARCHAR(100) NOT NULL,
  valor VARCHAR(100) NOT NULL,
  CONSTRAINT fk_produto FOREIGN KEY (id_produto) REFERENCES produto(id)
);

CREATE TABLE imagem (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  id_produto INTEGER NOT NULL,
  src VARCHAR(150) NOT NULL,
  CONSTRAINT fk_produto FOREIGN KEY (id_produto) REFERENCES produto(id)
);

CREATE TABLE produto_produto (
  id_produtoPrincipal INTEGER NOT NULL,
  id_produtoSecundario INTEGER NOT NULL,
  CONSTRAINT fk_produtoPrincipal FOREIGN KEY (id_produtoPrincipal) REFERENCES produto(id),
  CONSTRAINT fk_produtoSecundario FOREIGN KEY (id_produtoSecundario) REFERENCES produto(id),
  PRIMARY KEY (id_produtoPrincipal, id_produtoSecundario)
);

CREATE TABLE compra (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  id_cliente INTEGER NOT NULL,
  abertura DATE NOT NULL,
  finalizacao DATE NOT NULL,
  CONSTRAINT fk_cliente FOREIGN KEY (id_cliente) REFERENCES cliente(id)
);

CREATE TABLE compra_produto (
  id_compra INTEGER NOT NULL,
  id_produto INTEGER NOT NULL,
  quantidade INTEGER NOT NULL,
  CONSTRAINT fk_compra FOREIGN KEY (id_compra) REFERENCES compra(id),
  CONSTRAINT fk_produto FOREIGN KEY (id_produto) REFERENCES produto(id),
  PRIMARY KEY(id_compra, id_produto)
);

COMMIT;
