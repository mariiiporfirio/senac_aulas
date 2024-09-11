-- Criando um bando de dados - SQL

CREATE DATABASE sistemadeacademia;

-- Exibir se o banco de dados foi criado

show databases;

-- Deletar um Banco de Dados

DROP DATABASE sistemadeacademia;

-- Usar banco de dados que vou criar tabelas e dados na sequencia

USE DATABASE sistemadeacademia;

-- Criando tabela no banco de dados

CREATE TABLE cadastrocliente(
    cpf CHAR(15) primary key NOT NULL,
    nomecompleto VARCHAR(200) NOT NULL,
    datadenascimento DATE NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    telefone INT(15) NOT NULL,
    cep INT(8) NOT NULL,
    rua VARCHAR(50) NOT NULL,
    numero CHAR(8) NOT NULL,
    complemento VARCHAR(50),
    bairro CHAR(20) NOT NULL,
    cidade VARCHAR(50) NOT NULL,
    estado CHAR(20) NOT NULL
);

-- Adicionando oum atributo na tabela com ALTER

ALTER TABLE cadastrocliente ADD instagram VARCHAR(50);

-- Excluindo um atributo da tabel com ALTER

ALTER TABLE cadastrocliente DROP COLUMN instagram;

-- Renomeando a coluna/atributo da tabela

ALTER TABLE cadastrocliente CHANGE COLUMN nomecompleto nomeesobrenome VARCHAR(200) NOT NULL;

-- Alterando o datatyoe de uma coluna

ALTER TABLE cadastrocliente MODIFY COLUMN nomeesobrenome VARCHAR (250) NOT NULL;