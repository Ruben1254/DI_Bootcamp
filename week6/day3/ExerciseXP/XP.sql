-- Exercise 1

-- 1 Get a list of all film languages.
SELECT name FROM language;
-- 2 Get a list of all films joined with their languages – select the following details : film title, description, and language name. Try your query with different joins:
--    1 Get all films, even if they don’t have languages.

SELECT film.title, film.description, language.name
FROM film
FULL JOIN language
ON film.film_id = language.language_id;

--    2 Get all languages, even if there are no films in those languages.

SELECT film.title, film.description, language.name
FROM film
RIGHT JOIN language
ON film.film_id = language.language_id;

-- 3 Create a new table called new_film with the following columns : id, name. Add some new films to the table.
CREATE TABLE new_film(
id SERIAL,
name VARCHAR(30)
);

INSERT INTO new_film (name)
VALUES ('dikkenek'),
       ('thank you for smoking'),
       ('batman'),
       ('superman');
SELECT * FROM new_film;


-- 4 Create a new table called customer_review, which will contain film reviews that customers will make.
-- Think about the DELETE constraint: if a film is deleted, it’s review should be automatically deleted.
-- It should have the following columns:
--    1 review_id – a primary key, non null, auto-increment.
--    2 film_id – references the new_film table. The film that is being reviewed.
--    3 language_id – references the language table. What language the review is in.
--    4 title – the title of the review.
--    5 score – the rating of the review (1-10).
--    6 review_text – the text of the review. No limit on the length.
--    7 last_update – when the review was last updated.
CREATE TABLE customer_review
(review_id SERIAL,
 film_id VARCHAR(30),
 langage_id VARCHAR(30),
 title VARCHAR(50),
 score INTEGER,
 new_text TEXT,
 last_udapte DATE,
 PRIMARY KEY (review_id),
 FOREIGN KEY (film_id) REFERENCES new_film (name),
 FOREIGN KEY (language_id) REFERENCES language (name) 
);
-- 5 Add 2 movie reviews. Make sure you link them to valid objects in the other tables.

-- 6 Delete a film that has a review from the new_film table, what happens to the customer_review table?


-- EXERCISE 2
-- Use UPDATE to change the language of some films. Make sure that you use valid languages.
UPDATE language 
SET name = 'Hebrew'
WHERE name = 'Italian';
SELECT * FROM language ORDER BY language_id ASC;
-- Which foreign keys (references) are defined for the customer table? How does this affect the way in which we INSERT into the customer table?

-- We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?
CREATE TABLE customer_review(
review TEXT
)

DROP TABLE IF EXISTS customer_review;
-- Find out how many rentals are still outstanding (ie. have not been returned to the store yet).
SELECT count(rental_id) FROM rental WHERE return_date IS NULL;
-- Find the 30 most expensive movies which are outstanding (ie have not been returned to the store yet)
SELECT * FROM rental;
SELECT rental.return_date, payment.amount, payment.rental_id
FROM rental
FULL JOIN payment
ON rental.rental_id=payment.payment_id;

SELECT * FROM payment;

-- Your friend is at the store, and decides to rent a movie. He knows he wants to see 4 movies, but he can’t remember their names. Can you help him find which movies he wants to rent?
-- The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.

-- The 2nd film : A short documentary (less than 1 hour long), rated “R”.

-- The 3rd film : A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental, and he returned it between the 28th of July and the 1st of August, 2005.

-- The 4th film : His friend Matthew Mahan watched this film, as well. It had the word “boat” in the title or description, and it looked like it was a very expensive DVD to replace.
