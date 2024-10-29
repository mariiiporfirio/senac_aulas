CREATE DATABASE escola;
 
CREATE TABLE estudante (
id INT(10) AUTO_INCREMENT PRIMARY KEY,
nomecompleto VARCHAR(50) NOT NULL,
email VARCHAR(50) UNIQUE NOT NULL,
senha VARCHAR(50) NOT NULL,
creat_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO estudante(nomecompleto, email, senha)
VALUES ("Mariana Porfirio", "mariana.porfirio@sp.senac.br", "12345"),
("Carla Passos", "carla.passos@sp.senac.br", "67890");