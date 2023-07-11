-- DELETING RECORD - (DELETE vs TRUNCATE vs DROP)

/* DELETE is used to delete a record from a table. 
It only deletes rows/data. The structure is unaffected.*/

/* TRUNCATE is used to delete all the data from a table.
The structure is unaffected. We cannot undo this command.*/

/* DROP is used to delete the whole table schema (structure and data). */

USE gla4_cohort4;
SELECT * FROM learners;

SET SQL_SAFE_UPDATES=0;

DELETE FROM learners WHERE learnerName="Ismail";

INSERT INTO learners(learnerName,learnerDOB) VALUES
("Melvin", "1998-01-25"),("Zak", "1990-07-15"),("John", "2000-01-01"),("Jane", "1999-12-25");

DELETE FROM learners WHERE learnerDOB>"1998-01-01";

-- Write a query which deletes employees named "Tim" OR id=2 AND not born on 1st June 1990
DELETE FROM employees WHERE employeeName="Tim" OR employeeID=2 AND employeeDOB!="1990-06-01";

-- Write a query which deletes all records from employee table
TRUNCATE employees;


-- ALTER TABLE command
-- delete, rename, change data type, add column
-- rename table, add primary key, delete primary key, add foreign key, delete foreign key

SELECT * FROM employee;
DESCRIBE employee;

ALTER TABLE employee ADD employeeLocation VARCHAR(20) NOT NULL; -- add a field into the table

ALTER TABLE employee ADD employeeLocation VARCHAR(20) NOT NULL FIRST; -- add to the first field of the table

ALTER TABLE employee ADD employeeLocation VARCHAR(20) NOT NULL AFTER employeeName; -- add field after another field

ALTER TABLE employee DROP employeeLocation; -- will drop/delete a field

ALTER TABLE employee MODIFY employeeLocation VARCHAR(50) NULL; -- will change the data type of a field

ALTER TABLE employee RENAME COLUMN employeeLocation TO employeeCountry; -- will rename a field

ALTER TABLE employee RENAME TO employees; -- will rename the whole table 

DESCRIBE employees;

ALTER TABLE employees DROP PRIMARY KEY; -- will remove PRIMARY KEY from the table

ALTER TABLE employees ADD PRIMARY KEY(employeeID); -- will add PRIMARY KEY to field

-- TASK
        -- Add Country column in the begginning 
        -- Drop the Country column back
        -- Re-add the Country column at a specific location
        -- Rename the Country column to Location
        -- Change the data type of Location column
        
USE gla4_cohort4;
ALTER TABLE employees ADD country VARCHAR(20) NOT NULL FIRST;
ALTER TABLE employees DROP country;
ALTER TABLE employees ADD country VARCHAR(20) NOT NULL AFTER id;
ALTER TABLE employees RENAME COLUMN country TO location;
ALTER TABLE employees MODIFY location VARCHAR(50);


CREATE TABLE country(countryID INT PRIMARY KEY, countryName VARCHAR(25));
INSERT INTO country(countryID, countryName) VALUES
(1,"UK"),(4,"USA"),(3,"Germany");

UPDATE country SET countryID=2 WHERE countryName="USA";
ALTER TABLE country MODIFY countryName VARCHAR(25) NOT NULL;

SELECT * FROM country;

CREATE TABLE city(cityID INT PRIMARY KEY, cityName VARCHAR(25), countryID INT);
INSERT INTO city(cityID, cityName, countryID) VALUES
(1,"London",1),(2,"New York",2),(3,"Berlin",3),(4,"California",2),(5,"Manchester",2);

ALTER TABLE city ADD FOREIGN KEY(countryID) REFERENCES country(countryID); -- this will add a foreign key. 
-- It is good practice to add foreign keys AFTER the tables have been made

SHOW DATABASES;
USE information_schema;
USE gla4_cohort4;
SELECT COLUMN_NAME, CONSTRAINT_NAME FROM information_schema.key_column_usage WHERE TABLE_NAME="city";
ALTER TABLE city DROP FOREIGN KEY city_ibfk_1, DROP KEY countryID; -- this will drop/remove foreign key
DESCRIBE city;

SELECT * FROM city;
DESCRIBE city;


/*
CREATE two tables named (Student and Country) with below columns: 

Student: 
    1.    studentId: datatype = int 
    2.    studentName: datatype= varchar (10) 
    3.    studetnAge: datatype=int 
    4.     countryId

Country: 
    1.    countryId: datatype = int (10) 
    2.    countryName

Constraint for Student table: 
    1.    the studentId should be primary key 
    2.    The studentName can’t be null. 
    3.    The studentAge can’t be null. It will be taking 18 as a default value. 
    4.    the Student countryId column should be foreign key referencing to country table -- Add this via Alter

Constraint for country Table: 
    1.    The countryId should be primary key and can not be null. 
    2.    The countryName should only take (UK, USA, Germany) values.  

Note: 
    --     Add (studentDOB) column to the student table after studentId column 
    --     Change the lenghth of studentName column to 20
    --    Remove the Primary key from student table and add the primary key back
    --    Change the student table name to learner
*/

USE assignment;
CREATE TABLE student(studentId INT, studentName VARCHAR(10), studentAge INT, countryId INT);
CREATE TABLE country(countryId INT, countryName VARCHAR(10));

ALTER TABLE student ADD PRIMARY KEY(studentID);
ALTER TABLE student MODIFY studentName VARCHAR(10) NOT NULL;
ALTER TABLE student MODIFY studentAge INT NOT NULL DEFAULT 18;
ALTER TABLE student ADD FOREIGN KEY(countryId) REFERENCES country(countryId);
SELECT * FROM student;
DESCRIBE student;

ALTER TABLE country ADD PRIMARY KEY(countryID); ALTER TABLE country MODIFY countryID INT NOT NULL;
ALTER TABLE country MODIFY countryName ENUM("UK", "USA", "Germany");
SELECT*FROM country;
DESCRIBE country;

ALTER TABLE student ADD studentDOB DATE AFTER studentID;
ALTER TABLE student MODIFY studentName VARCHAR(20) NOT NULL;
ALTER TABLE student DROP PRIMARY KEY; ALTER TABLE student ADD PRIMARY KEY(studentID);
ALTER TABLE student RENAME TO learner;


ALTER TABLE countryLanguage ADD PRIMARY KEY(countryCode, language);