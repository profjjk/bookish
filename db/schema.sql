DROP DATABASE IF EXISTS bookish_db;

CREATE DATABASE bookish_db;

USE bookish_db;

CREATE TABLE books (
  id INT AUTO_INCREMENT PRIMARY KEY,
  book_info VARCHAR(250) NOT NULL,
  finished BOOLEAN DEFAULT false
);