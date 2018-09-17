
DROP DATABASE IF EXISTS vgresources_db;
CREATE DATABASE vgresources_db;
USE vgresources_db;

CREATE TABLE games (
    id INTEGER NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

