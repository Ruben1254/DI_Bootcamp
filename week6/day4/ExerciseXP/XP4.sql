-- Database: hr.backup

-- PART1 
-- Q1
SELECT first_name AS FirstName,last_name AS LastName
FROM employees; 

-- Q2
SELECT DISTINCT department_id FROM employees;

-- Q3
SELECT * FROM employees ORDER BY first_name ASC;

-- Q4
SELECT (first_name,last_name) AS names,salary,ROUND(salary
*0.15) AS PF FROM employees;

-- Q5
SELECT (first_name,last_name) AS names,salary,employee_id FROM employees
ORDER BY salary ASC;

-- Q6
SELECT sum(salary) FROM employees;

-- Q7
SELECT max(salary),min(salary) FROM employees;

-- Q8
SELECT avg(salary) FROM employees;

-- Q9
SELECT count(employee_id) FROM employees;

-- Q10
SELECT UPPER(first_name) FROM employees;

-- Q11
SELECT SUBSTRING (first_name,1,3) FROM employees;
SELECT LEFT(first_name,3) FROM employees;

-- Q12
SELECT CONCAT(first_name,' ',last_name) AS full_name FROM employees;

-- Q13
SELECT first_name,last_name,LENGTH(CONCAT(first_name,last_name)) FROM employees;

-- Q14

-- Q15
SELECT * FROM employees LIMIT 10;

-- PART2
-- Q1
SELECT first_name,last_name,salary FROM employees WHERE salary BETWEEN 10000 AND 15000;

-- Q2
SELECT first_name,last_name,hire_date FROM employees WHERE hire_date LIKE '%1987%';

-- Q3
SELECT first_name from employees WHERE first_name ILIKE '%c%' AND first_name ILIKE '%e%';

-- Q4
SELECT employees.first_name,employees.last_name,jobs.job_title,employees.salary
FROM employees
INNER JOIN jobs
ON employees.job_id = jobs.job_id
WHERE job_title NOT IN ('Programmer','Shipping Clerk') AND salary IN (4500,10000,15000);

-- Q5
SELECT last_name FROM employees WHERE LENGTH(last_name) = 6;

-- Q6
SELECT last_name FROM employees WHERE last_name ILIKE '__e%';

-- Q7
SELECT employees.*,jobs.job_title
FROM employees
INNER JOIN jobs
ON employees.job_id = jobs.job_id;

-- Q8
SELECT * FROM employees WHERE last_name IN ('Jones','Blake','Scott','King','Ford');
