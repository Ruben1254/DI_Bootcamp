-- Database: postgres
CREATE TABLE product_orders (
id SERIAL,
client_id INTEGER,
order_date DATE NOT NULL,
PRIMARY KEY (client_id)
);

CREATE TABLE items (
item_id SERIAL,
order_id INTEGER NOT NULL,
item_name VARCHAR(30) NOT NULL,
price INTEGER NOT NULL,
PRIMARY KEY (item_id),
FOREIGN KEY (order_id) REFERENCES product_orders (client_id) ON DELETE CASCADE
);

INSERT INTO product_orders(client_id,order_date) VALUES
(45,'12-03-2022'),
(62,'03-06-2021'),
(3,'01-26-018');

INSERT INTO items(order_id,item_name,price) VALUES
(62,'table',60),
(3,'chair',20),
(45,'computer',300),
(62,'keyboard',50),
(62,'mouse',25),
(45,'skate',43),
(45,'guitare',120);

SELECT  sum(items.price)
FROM product_orders
INNER JOIN items
ON client_id = order_id
WHERE order_id = 45;

