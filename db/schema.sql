DROP DATABASE IF EXISTS bookish_db;

CREATE DATABASE bookish_db;

USE bookish_db;

CREATE TABLE books (
  id INT AUTO_INCREMENT PRIMARY KEY,
  book_name VARCHAR(250) NOT NULL,
  author VARCHAR(50),
  finished BOOLEAN DEFAULT false
):