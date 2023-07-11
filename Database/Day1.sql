-- Single line comment
/*
Multi-line 
comment
*/

SHOW DATABASES; -- list all the available databases
-- hold Ctrl+Enter to execute the query
-- end all queries with a semicolon (;)

CREATE DATABASE GLA4_Cohort4; -- will create a database with name gla4_cohort4
USE GLA4_Cohort4; -- select the gla4_cohort4 database
SHOW TABLES; -- will list all tables in the selected database


/*
1. Create 3 databases with name(Test1, Test2, Test3)
2. Delete Test1 database
3. List all available tables in Test2 database
*/

-- 1.
CREATE DATABASE test1;
CREATE DATABASE test2;
CREATE DATABASE test3;

-- 2.
DROP DATABASE test1;

-- 3. 
USE test2;
SHOW TABLES;

CREATE TABLE learners(learnerID INT, learnerName varchar(15), learnerDOB date);

SHOW TABLES; -- will list all the available tables in the selected database;

DESCRIBE learners; -- will show the definition of a table;

INSERT INTO learners(learnerID, learnerName, learnerDOB) VALUES
(1, "Ismail", "1995-01-20");

SELECT * FROM learners;

insert into Learners(learnerID, learnerName, learnerDOB) VALUES
(2, "Rocky", "1997-11-20"),(3,"Yousef","1998-10-25");

/*
1. Create course table with below columns:
	- courseID
	- courseSubject
	- startDate
	- time
2. insert four records into the table
*/

CREATE TABLE course(courseID INT, courseSubject VARCHAR(20), startDate DATE, `time` TIME);

INSERT INTO course(courseID, courseSubject, startDate, time) VALUES
(1, "HTML", "2023-05-20","12:00:00"),(2, "CSS", "2023-05-25","15:04:00"),(3, "JavaScript", "2023-06-15","10:30:00"),(4, "JavaScript", "2023-07-01","09:21:18");

SELECT * FROM course;

/*
1. create a database with name 'Assignement'
2. Create a table (name it whatever you want) in the Assignement database with five columns of different data types.
3. Insert 2 record with single insertion.
4. Insert 8 recrods with multi-insertion.
*/

CREATE DATABASE assignment;
USE assignment;

CREATE TABLE assignment(primaryKeyID INT PRIMARY KEY, stringText VARCHAR(25), givenDate DATE, givenTime TIME, givenNumber DECIMAL(5,2));

INSERT INTO assignment(PrimaryKeyID , stringText , givenDate , givenTime, givenNumber) values
(9, "Mm", "2020-03-20","18:00:00", 81.81);

INSERT INTO assignment(PrimaryKeyID , stringText , givenDate , givenTime, givenNumber) VALUES
(0, "Jj", "2010-12-15","16:00:00", 100.0);

INSERT INTO assignment(PrimaryKeyID , stringText , givenDate , givenTime, givenNumber) VALUES
(1, "Aa", "1998-01-25","10:00:00", 25),(2, "Bb", "1999-02-28","11:00:00", 1.2),(3, "Cc", "2000-03-20","12:00:00", 6.16),(4, "Dd", "2001-04-01","13:00:00", 16.12),(5, "Ee", "2002-05-05","22:00:00", 2.5),(6, "Ff", "2003-06-12","12:24:36", 3.6),(7, "Gg", "2004-07-04","14:00:00", 142.87),(8, "Hi", "2005-01-07","15:00:00", 18);

SELECT * FROM assignment;

