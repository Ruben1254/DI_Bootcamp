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
    
    SELECT * FROM ITEMS;
    SELECT * FROM ITEMS WHERE price > 80;
    SELECT * FROM ITEMS WHERE price <= 300;
    SELECT * FROM CUSTOMERS WHERE last_name = 'Smith';
    SELECT * FROM CUSTOMERS WHERE last_name = 'Jones';
    SELECT * FROM CUSTOMERS WHERE first_name != 'Scott';
