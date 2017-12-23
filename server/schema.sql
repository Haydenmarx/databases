CREATE DATABASE chat;

USE chat;


CREATE TABLE users (
  id INT(11) AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(40) NOT NULL
);

CREATE TABLE messages (
  id INT(11) AUTO_INCREMENT PRIMARY KEY, 
  user_id int,
  message VARCHAR(280) NOT NULL, 
  room VARCHAR(40) NOT NULL, 
  posted DATE NOT NULL,
  FOREIGN KEY (user_id) 
    REFERENCES users(id)
    ON DELETE CASCADE
);

/* Create other tables and define schemas for them here! */


/*  Execute this file from the command line by typing:
 *    mysql -u student < server/schema.sql
 *  to create the database and the tables.*/