/*
Database Project Week 

Introduction 

You have been asked to develop a database for a local leisure centre, 
as they are in the process of upgrading their existing paper base record keeping system 
building for their swimming pool. They would like to use the database to 
help them manage their swimming lessons. 
Below are the entities and their attributes which were extracted from their 
paper-based system by a database developer who never got to implement 
the database for the local leisure centre. Use the entities and 
their attributes provided to create the respective tables. 
In addition, the leisure centre has now decided that they want a database 
implemented using SQL, preferably using MySQL workbench.   
It is the view that once the database is successfully implemented, 
the leisure centre would then decide to integrate the databases with 
a front-end Python application.   

 
Course (CourseID PK, Level, Sessions, Instructor, startDate, LessonTime) 
Lessons (LessonID PK, CourseID, MemberID)  
Members (MemberID PK, Firstname, Surname, DOB, Address, City)  

EXERCISES: 
Use the SQL AND, OR and NOT Operators in your query (The WHERE clause can be combined with AND, OR, and NOT operators) 
Where courseID is equals to a number below 5 and the first name of any of the instructors  
Where courseID is equals to a number above 5 and the lesson time is in the morning or afternoon.  


Order by the above results by: 
 startDate in “course” table 
 MemberID in “members” table 
 
UPDATE the following: 
 Members table, change the addresses of any three members. 
Course table, change the startDate and lesson time for three of the sessions. 

Use the SQL MIN () and MAX () Functions to return the smallest and largest value  
Of the LessonID column in the “lesson” table 
Of the membersID column in the “members” table  

Use the SQL COUNT (), AVG () and SUM () Functions for these: 
Count the total number of members in the “members” table 
Count the total number of sessions in the ”sessions” table 
Find the average session time for all “sessions” in course table  

WILDCARD queries (like operator)  

Find all the people from the “members” table whose last name starts with A. 
Find all the people from the “members” table whose last name ends with A. 
Find all the people from the “members” table that have "ab" in any position in the last name. 
Find all the people from the “members” table that that have "b" in the second position in their first name. 
Find all the people from the “members” table whose last name starts with "a" and are at least 3 characters in length: 
Find all the people from the “members” table whose last name starts with "a" and ends with "y" 
Find all the people from the “members” table whose last name does not starts with "a" and ends with "y" 

What do you understand by LEFT and RIGHT join? Explain with an example. 
 */
 
 -- create database for local leisure centre
CREATE DATABASE leisureCentre;

-- Course (CourseID, Level, Sessions, Instructor, startDate, LessonTime) 
CREATE TABLE IF NOT EXISTS course (courseID INT PRIMARY KEY AUTO_INCREMENT NOT NULL, 
`level` DECIMAL(3,2), sessions INT, instructor ENUM("Nigel Uno", "Hoagie P. Gilligan", "Kuki Sanban", "Wallabee Beetles", "Abigail Lincoln") NOT NULL, startDate DATE, lessonTime TIME); 
INSERT INTO course(`level`, sessions, instructor, startDate, lessonTime) VALUES
(1,1,4,"2023-01-25","12:00"), -- at least 8 records per table, make up all the values
(1,1,4,"2023-01-25","12:00"),
(1,1,4,"2023-01-25","12:00"),
(1,1,4,"2023-01-25","12:00"),
(1,1,4,"2023-01-25","12:00"),
(1,1,4,"2023-01-25","12:00"),
(1,1,4,"2023-01-25","12:00"),
(1,1,4,"2023-01-25","12:00"); 

-- Lessons (LessonID, CourseID, MemberID)
CREATE TABLE IF NOT EXISTS lessons (lessonID INT PRIMARY KEY AUTO_INCREMENT NOT NULL, 
courseID INT, FOREIGN KEY(courseID) REFERENCES course(courseID), 
memberID INT, FOREIGN KEY (memberID) REFERENCES members(memberID));
INSERT INTO lessons(courseID, memberID) VALUES
(1,2),
(1,2),
(1,2),
(1,2),
(1,2),
(1,2),
(1,2),
(1,2),
(1,2),
(1,2),
(1,2),
(1,2),
(1,2),
(1,2),
(1,2),
(1,2);

-- Members (MemberID, Firstname, Surname, DOB, Address, City) 
CREATE TABLE IF NOT EXISTS members (memberID INT PRIMARY KEY AUTO_INCREMENT NOT NULL, 
firstname VARCHAR(16), surname VARCHAR(16), DOB DATE, address TEXT, city VARCHAR(20) DEFAULT "London");
INSERT INTO members(firstname, surname, DOB, address, city) VALUES
("Miles","Morales","2023-01-25","1273 Rockerfella Street","Liverpool"),
("Miguel","O'Hara","2023-01-25","1273 Rockerfella Street","Manchester"),
("Peter","Parker","2023-01-25","1273 Rockerfella Street","Birmingham"),
("Gwendolyn","Stacy","2023-01-25","1273 Rockerfella Street","Newcastle"),
("Pavitr","Prabhakar","2023-01-25","1273 Rockerfella Street","Glasgow"),
("Hobart","Brown","2023-01-25","1273 Rockerfella Street"),
("Jessica","Drew","2023-01-25","1273 Rockerfella Street","Manchester"),
("Peni","Parker","2023-01-25","1273 Rockerfella Street","Glasgow"),
("Mayday","Parker","2023-01-25","1273 Rockerfella Street","Birmingham");

-- Use the SQL AND, OR and NOT Operators in your query (The WHERE clause can be combined with AND, OR, and NOT operators) 
-- Where courseID is equals to a number below 5 and the first name of any of the instructors 
SELECT * FROM course 
INNER JOIN lessons ON courseID=courseID
WHERE courseID<5 AND instructor="Name%";
-- Where courseID is equals to a number above 5 and the lesson time is in the morning or afternoon.  
SELECT * FROM course 
INNER JOIN lessons ON courseID=courseID
WHERE courseID>5 AND NOT lessonTime>="18:00";

-- order by startDate in “course” table 
SELECT * FROM course
ORDER BY startDate DESC;

-- order by MemberID in “members” table 
SELECT * FROM members
ORDER BY memberID ASC;

-- update Members table, change the addresses of any three members. 
UPDATE members SET address="value" WHERE "condition that covers 3 members";
-- update Course table, change the startDate and lesson time for three of the sessions. 
UPDATE course SET startDate="yyyy-mm-dd" WHERE "condition that covers 3 sessions";

-- smallest MIN () and largest MAX () value of the lessonID column in the “lessons” table 
SELECT MIN(lessonID) FROM lessons;
SELECT MAX(lessonID) FROM lessons;

-- smallest MIN () and largest MAX () value of the memberID column in the “members” table  
SELECT MIN(memberID), CONCAT(firstname, " ", surname) AS "Name" FROM members;
SELECT MAX(memberID), CONCAT(firstname, " ", surname) AS "Name" FROM members;

-- Count the total number of members in the “members” table 
SELECT COUNT(*) AS "No. of Members" FROM members;
-- Count the total number of sessions in the” members” table 
SELECT SUM(sessions) AS "No. of Sessions" FROM members
INNER JOIN lessons ON memberID=memberID
INNER JOIN course ON courseID=courseID;
-- Find the average session time for all “sessions” in course table 
SELECT AVG(lessonTime) AS "Avg. Session Time" FROM course; 

-- Find all the people from the “members” table whose last name starts with A. 
SELECT * FROM members WHERE surname LIKE "A%";
-- Find all the people from the “members” table whose last name ends with A. 
SELECT * FROM members WHERE surname LIKE "%a";
-- Find all the people from the “members” table that have "ab" in any position in the last name. 
SELECT * FROM members WHERE surname LIKE "%ab%";
-- Find all the people from the “members” table that that have "b" in the second position in their first name.
SELECT * FROM members WHERE firstname LIKE "_b%"; 
-- Find all the people from the “members” table whose last name starts with "a" and are at least 3 characters in length: 
SELECT * FROM members WHERE surname LIKE "A__%";
-- Find all the people from the “members” table whose last name starts with "a" and ends with "y" 
SELECT * FROM members WHERE surname LIKE "A%" AND surname LIKE "%y";
-- Find all the people from the “members” table whose last name does not starts with "a" and ends with "y" 
SELECT * FROM members WHERE surname NOT LIKE "A%" AND surname LIKE "%y";

-- What do you understand by LEFT and RIGHT join? Explain with an example. 
SELECT `level`, sessions, instructor, startDate, lessonTime FROM members
LEFT JOIN lessons ON memberID=memberID
LEFT JOIN course ON courseID=courseID;