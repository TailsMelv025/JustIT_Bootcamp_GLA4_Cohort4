CREATE TABLE trainer(departmentID INT PRIMARY KEY AUTO_INCREMENT, 
trainerName VARCHAR(10) NOT NULL, 
trainerSalary INT ,
location VARCHARACTER(10) DEFAULT "London",
CHECK (tainerSalary>20000)
);


INSERT INTO Trainer(trainerName, tainerSalary, location) VALUES
("Name2", 11);

SELECT * FROM trainer;

/* TASK
1. create a table subject (id primary key, subjectName, Edition) 
        subjectName cant be null, subject won't accept 
        any value but 'CSS','HTML''Database'. 
        If you dont insert Edition it should take 'Second' value by default.
2. At leaset insert two insert two record
*/

USE gla4_cohort4;
CREATE TABLE subject(id INT PRIMARY KEY AUTO_INCREMENT, 
subjectName ENUM("CSS","HTML","Database") NOT NULL,
-- CHECK(subjectName="HTML" or subjectName="CSS" or subjectName="Database"); -- can use instead of ENUM
-- CHECK(subjectName IN("CSS", "HTML", "Database")); -- can use instead of ENUM
edition VARCHAR(10) DEFAULT "Second");

DESC subject;

SELECT * FROM subject;

CREATE TABLE department(
departmentID INT PRIMARY KEY,
departmentName VARCHAR(10) NOT NULL
);

-- Insert some data in Department table
INSERT INTO department(departmentID, departmentName) VALUES
(1,"IT"),(2,"Software"),(3,"HR");

SELECT * FROM department;

CREATE TABLE employee(
employeeID INT PRIMARY KEY,
employeeName VARCHAR(10) NOT NULL,
employeeDepartmentID INT, -- the name of the foreign key field does not have to be the same as the original name
FOREIGN KEY (employeeDepartmentID) REFERENCES department(departmentID) -- foreign key will always need a reference to a primary key (not unique key)
);

DESC employee;

-- insert three records in the employee table
INSERT INTO employee(employeeID,  employeeName, employeeDepartmentID) VALUES
(1,"John",2),(2,"Jane",3),(3,"Melvin",1),(4,"Miles",1);

SELECT * FROM employee;

-- UPDATING Records
-- UPDATE <tableName> SET <columnName> = <value> WHERE <condition>
UPDATE employee SET employeeName="Zak" WHERE employeeID=1;

-- write a query which updates a record who is not employee #2 and employeeID is less than 1
UPDATE employee SET employeeName="Waqas" WHERE NOT employeeID=2 AND employeeID<1;
UPDATE employee SET employeeName="Waqas" WHERE employeeID=4 OR (employeeDepartmentID!=3 AND employeeName="John");