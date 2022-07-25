CREATE DATABASE bootcamp
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United States.1252'
    LC_CTYPE = 'English_United States.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;
    
CREATE TABLE students(
    id INTEGER,
    first_name CHAR(10),
    last_name CHAR(10),
    birth_date DATE
    );

INSERT INTO students (id,first_name,last_name,birth_date) VALUES
(1,'Marc','Benichou','11/02/1998'),
(2,'Yoan','Cohen','12/03/2010'),
(3,'Lea','Benichou','07/27/1987'),
(4,'Amelia','Dux','04/07/1996'),
(5,'David','Grez','06/14/2003'),
(6,'Omer','Simpson','10/03/1980');

SELECT * FROM students;
SELECT first_name,last_name FROM students;
SELECT first_name,last_name FROM students WHERE id = 2;
SELECT first_name,last_name FROM students WHERE
last_name = 'Benichou' AND first_name = 'Marc';
SELECT first_name,last_name FROM students WHERE
last_name = 'Benichou' OR first_name = 'Marc';
SELECT first_name,last_name FROM students WHERE
last_name = 'Benichou' OR first_name = 'Marc';
SELECT first_name,last_name FROM students WHERE
first_name LIKE '%a%';
SELECT first_name,last_name FROM students WHERE
first_name LIKE 'a%';
SELECT first_name,last_name FROM students WHERE
first_name LIKE '%a';
SELECT first_name,last_name FROM students WHERE
first_name LIKE '%a_';
SELECT first_name,last_name FROM students WHERE
id = 1 or id = 3;
SELECT * FROM students WHERE birth_date >= '01/01/2000';