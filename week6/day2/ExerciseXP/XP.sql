  -- Exercise 1
    CREATE TABLE ITEMS(
        items_name CHAR(20),
        price INTEGER
    );
    
    INSERT INTO ITEMS (items_name,price) VALUES 
    ('Small Desk',100),
    ('Large Desk',300),
    ('Fan',80);
    
    CREATE TABLE CUSTOMERS(
    first_name CHAR(20),
    last_name CHAR(20)
    );
    
    INSERT INTO CUSTOMERS (first_name,last_name)
    VALUES
    ('Greg','Jones'),
    ('Sandra','Jones'),
    ('Scott','Scott'),
    ('Trevor','Green'),
    ('Melanie','Johnson');

    SELECT * FROM ITEMS ORDER BY price ASC;
SELECT * FROM ITEMS WHERE price >= 80 ORDER BY price ASC;
SELECT * FROM CUSTOMERS ORDER BY first_name ASC LIMIT 3;
SELECT last_name FROM CUSTOMERS ORDER BY last_name DESC;