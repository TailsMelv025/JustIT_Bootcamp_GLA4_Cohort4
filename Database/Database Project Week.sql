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
USE leisureCentre;

-- Course (CourseID, Level, Sessions, Instructor, startDate, LessonTime) 
CREATE TABLE IF NOT EXISTS course (courseID INT PRIMARY KEY AUTO_INCREMENT NOT NULL, 
`level` DECIMAL(5,2), sessions INT, instructor ENUM("Nigel Uno", "Hoagie P. Gilligan", "Kuki Sanban", "Wallabee Beetles", "Abigail Lincoln") NOT NULL, startDate DATE, lessonTime TIME); 
INSERT INTO course(`level`, sessions, instructor, startDate, lessonTime) VALUES
(1.0,30,2,"2023-05-01","10:00"), -- at least 8 records per table, make up all the values
(2.55,7,3,"2023-07-05","11:00"),
(2.42,2,4,"2023-06-04","12:00"),
(3.33,14,2,"2023-08-25","10:30"),
(5.00,7,4,"2023-07-14","12:00"),
(7.50,15,5,"2023-07-15","09:30"),
(9.09,10,5,"2023-05-25","11:30"),
(10.0,25,1,"2023-06-25","09:00"); 

-- Members (MemberID, Firstname, Surname, DOB, Address, City) 
CREATE TABLE IF NOT EXISTS members (memberID INT PRIMARY KEY AUTO_INCREMENT NOT NULL, 
firstname VARCHAR(16), surname VARCHAR(16), DOB DATE, address TEXT, city VARCHAR(20) DEFAULT "London");
INSERT IGNORE INTO members(firstname, surname, DOB, address, city) VALUES
("Miles","Morales","2007-08-03","1273 Brooklyn Street","Liverpool"),
("Miguel","O'Hara","2099-09-01","928 Nueva Drive","Manchester"),
("Peter","Parker","1983-06-05","616 Queens Street","Birmingham"),
("Gwendolyn","Stacy","2007-09-17","65 Queens Street","Newcastle"),
("Pavitr","Prabhakar","2008-11-17","50101 Mumbattan Road","Glasgow"),
("Hobart","Brown","2006-11-19","138 London Road","London"),
("Jessica","Drew","2023-04-05","404 London Road","Manchester"),
("Margo","Kess","2009-10-31","22191 Rockerfella Street","Glasgow"),
("Mayday","Parker","2018-12-25","616 Queens Street","Birmingham");

ALTER TABLE course MODIFY COLUMN `level` DECIMAL(5,2);
DESC course;
DROP TABLE course;
SELECT * FROM members;

-- Lessons (LessonID, CourseID, MemberID)
CREATE TABLE IF NOT EXISTS lessons (lessonID INT PRIMARY KEY AUTO_INCREMENT NOT NULL, 
courseID INT, FOREIGN KEY(courseID) REFERENCES course(courseID), 
memberID INT, FOREIGN KEY (memberID) REFERENCES members(memberID));
INSERT INTO lessons(courseID, memberID) VALUES
(8,2),
(7,2),
(2,9),
(6,7),
(7,1),
(6,4),
(7,4),
(7,3),
(2,3),
(5,8),
(7,6),
(7,5),
(5,6),
(5,5),
(2,8),
(2,1);


-- Use the SQL AND, OR and NOT Operators in your query (The WHERE clause can be combined with AND, OR, and NOT operators) 
-- Where courseID is equals to a number below 5 and the first name of any of the instructors 
SELECT * FROM course 
WHERE courseID<5 AND instructor="Hoagie P. Gilligan";
-- Where courseID is equals to a number above 5 and the lesson time is in the morning or afternoon.  
SELECT * FROM course 
WHERE courseID>5 AND NOT lessonTime>"18:00";

-- order by startDate in “course” table 
SELECT * FROM course
ORDER BY startDate ASC;

-- order by MemberID in “members” table 
SELECT * FROM members
ORDER BY memberID DESC;

SET SQL_SAFE_UPDATES=0;
-- update Members table, change the addresses of any three members. 
UPDATE members SET address="22191 Brooklyn Street" WHERE firstname="Margo";
SELECT * FROM members;
-- update Course table, change the startDate and lesson time for three of the sessions. 
UPDATE course SET startDate="2023-07-11" WHERE startDate BETWEEN "2023-07-01" AND "2023-07-31";
SELECT * FROM course;

-- smallest MIN () and largest MAX () value of the lessonID column in the “lessons” table 
SELECT MIN(lessonID) FROM lessons;
SELECT MAX(lessonID) FROM lessons;

-- smallest MIN () and largest MAX () value of the memberID column in the “members” table  
SELECT MIN(memberID) FROM members;
SELECT MAX(memberID) FROM members;

-- Count the total number of members in the “members” table 
SELECT COUNT(*) AS "No. of Members" FROM members;
-- Count the total number of sessions in the” members” table 
SELECT SUM(sessions) AS "No. of Sessions" FROM members m
INNER JOIN lessons l ON m.memberID=l.memberID
INNER JOIN course c ON l.courseID=c.courseID;
-- Find the average session time for all “sessions” in course table 
SELECT SEC_TO_TIME(ROUND(AVG(TIME_TO_SEC(lessonTime)))) AS "Avg. Session Time" FROM course; 

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
SELECT firstname, surname, `level`, sessions, instructor, startDate FROM members m
LEFT JOIN lessons l ON m.memberID=l.memberID -- left join keeps all values from the left table mentioned (members) and only values that match from the right table (lessons)
RIGHT JOIN course c ON l.courseID=c.courseID; -- right join keeps all values from the right table mentioned (course) and only values that match from the left table (lessons)