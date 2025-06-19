CREATE DATABASE nullcatia;
USE nullcatia;

-- Tabla de territorios
CREATE TABLE territories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE
);

-- Tabla de clanes
CREATE TABLE clans (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    territory_id INT NOT NULL,
    FOREIGN KEY (territory_id) REFERENCES territories(id)
        ON DELETE RESTRICT
        ON UPDATE CASCADE
);

-- Tabla de gatitos
CREATE TABLE cats (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INT NOT NULL,
    clan_id INT NOT NULL,
    FOREIGN KEY (clan_id) REFERENCES clans(id)
        ON DELETE RESTRICT
        ON UPDATE CASCADE,
    INDEX idx_clan_id (clan_id)
);

-- Tabla de pergaminos
CREATE TABLE scrolls (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    content TEXT NOT NULL,
    cat_id INT NOT NULL,
    FOREIGN KEY (cat_id) REFERENCES cats(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    INDEX idx_cat_id (cat_id)
);
