USE company;

-- CASE expression
SELECT product_name, quantity, CASE 
WHEN quantity > 100 THEN "High"
WHEN quantity > 50 THEN "Medium"
ELSE "Low"
END;

-- give 2000 bonus to employees who receive 25000 and 3000 bonus to employees who recieve 30000 salary
SELECT CONCAT(fname," ",lname) AS "name", salary, CASE
WHEN salary>=30000 THEN 3000
WHEN salary>=25000 THEN 2000
ELSE NULL END AS bonus, CASE
WHEN salary>=30000 THEN salary+3000
WHEN salary>=25000 THEN salary+2000
ELSE NULL END AS full_salary
FROM employee;

    /*
Write a case expression which return employees full name salary with bonus as below:
    if salary is 1000 - 19000 increase 1000 
    if salary is 20000 - 29000 increase 2000
    if salary is 30000 - 39000 increase 3000
    if salary is 40000 - 49000 increase 4000
    if salary is 50000 - 59000 increase 5000
    if a person receive no salary then should display 'Not elegible for bonus'
*/

SELECT CONCAT(fname," ",lname) AS "name", salary, CASE
WHEN salary BETWEEN 1000 AND 19000 THEN salary+1000
WHEN salary BETWEEN 20000 AND 29000 THEN salary+2000
WHEN salary BETWEEN 30000 AND 39000 THEN salary+3000
WHEN salary BETWEEN 40000 AND 49000 THEN salary+4000
WHEN salary BETWEEN 50000 AND 59000 THEN salary+5000
ELSE "Not eligible for bonus" END AS "bonus"
FROM employee;


CREATE DATABASE NewDatabase;
USE NewDatabase;
CREATE TABLE Country(countryId INT PRIMARY KEY, countryName VARCHAR(10) NOT NULL);
INSERT INTO Country(countryId, countryName) VALUES 
(1,'UK'),(2,'USA'),(3,'Germany');
CREATE TABLE City(cityId INT PRIMARY KEY, 
cityName VARCHAR(15) NOT NULL, countryId INT,
FOREIGN KEY (countryId) REFERENCES Country (countryId) ON DELETE CASCADE);
INSERT INTO City(cityId, cityName, countryId) VALUES
(1,'London',1),(2,'Manchester',1),(3,'NewYork',2),(4,'Berlin',3);
SET SQL_SAFE_UPDATES=0;

SELECT * FROM city;
SELECT * FROM country;
DELETE FROM country WHERE countryName="Germany";
DROP DATABASE newDatabase;

-- ON DELETE SET NULL -- when deleting a record, anywhere it is referenced as a FOREIGN KEY will return NULL
-- ON DELETE CASCADE -- when deleting a record, anywhere it is referenced as a FOREIGN KEY will DELETE/DROP
