-- Database: Day3 DailyChallenge
-- PART 1
-- 1
CREATE TABLE customer (
id SERIAL,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
PRIMARY KEY (id)  
);

CREATE TABLE customer_profil(
id SERIAL,
isLoggedIn BOOLEAN DEFAULT false,
customer_id INTEGER,
FOREIGN KEY (customer_id) REFERENCES customer (id)
);

-- 2
INSERT INTO customer (first_name,last_name) VALUES
('John','Doe'),
('Jerome','Lalu'),
('Lea','Rive');
SELECT * FROM customer;
-- 3
INSERT INTO customer_profil (isLoggedIn) VALUES
(true),
(true);
SELECT * FROM customer_profil;
