/*Assignment 1 

The purpose of this database is to model data for a breakdown company.  
Members must be registered with the company and each member can have multiple vehicles.  
When a vehicle breaks down, an Engineer will attend 
in the van that have been assigned.   
They are assigned a new van once the current one reaches 80000 miles. 

Task 1: 
Create the following tables: 

Member 
MemberID(PK), VARCHAR(10) 
MFName, VARCHAR(20) 
MLName, VARCHAR(20) 
MLoc, VARCHAR(20) 

Vehicle: 
VehReg(PK), VARCHAR(10) 
VehMake VARCHAR(10) 
VehModel, VARCHAR(10) 
MemberID(FK), VARCHAR(10) 

Engineer: 
EngID(PK), INT 
EFName, VARCHAR(20) 
ELName, VARCHAR(20) 

EngVan: 
VanReg(PK), VARCHAR(10) 
VanMake VARCHAR(10) 
VanModel, VARCHAR(10) 
EngID(FK), INT 
VMileage, INT 

Breakdown: 
BDID(PK), INT 10 
VehReg(FK), VARCHAR(10) 
VanReg(FK), VARCHAR(10) 
BDDATE, date 
BDTIME, time 
BDLoc,  

Using the Alter command set the foreign keys 

Task 2
Enter the following data 
Member table – 5 records 
Vehicle table – 8 records 
Engineer table – 3 records 
EngVan table – 5 records 
Breakdown table – 12 records 
Have 2 breakdowns on the same day 
Have 3 breakdowns in the same month 
Have at least 3 vehicles that have broken down more than once 

Task 3 
Perform the following queries 
The names of members who live in a location e.g. London. 
All cars registered with the company e.g. all Nissan cars. 
The number of engineers that work for the company. 
The number of members registered. 
All the breakdown after a particular date 
All the breakdown between 2 dates 
The number of time a particular vehicle has broken down 
The number of vehicles broken down more than once 

Task 4 
Create the following table: 

MshipType: 
MTID(PK), INT 
MType, VARCHAR(6) 
MPrice, decimal(4, 2) 

Enter the following data 
1, Gold, 99.99 
2, Silver, 59.99 
3, Bronze, 39.99 

Task 5  
Using the alter command add in the field “MTID”, set it to FK and allow null.  
Then using the update command assign a MTID to each vehicle. 

Task 6 
Perform the following queries: 
All the vehicles a member owns. 
The number of vehicles for each member in descending order. 
The number of vans driven by a particular engineer. 
All vehicles that have broken down in a particular location along with member details. 
A list of all vehicles that broke down along with the member details and the engineer who attended 
A list of all breakdown along with member and engineer details between two dates. 
A further 3 relational queries of your choice that are meaningful to the company. 

Task 7 
Using W3Schools or any other resource research the following functions 
– Avg, Max, Min, Sum.  
Explain with examples how each one is used.  
Create a separate database with sample data to illustrate your examples.  
However please do not copy from the websites. 

Task 8 
For 2 can say if greater than one vehicle owned then has multi-car policy 
The number of times each car broken down 
If more than twice then next premium to be increased by 10% 
If twice then increase by 5% 
If once then no increase 
If not broken down then 10% discount 
 */


-- TASK 1 - Create Tables
CREATE DATABASE IF NOT EXISTS breakdown;
USE breakdown;

CREATE TABLE IF NOT EXISTS member(
memID VARCHAR(10) PRIMARY KEY,  
memForename VARCHAR(20),
memSurname VARCHAR(20),
memLocation VARCHAR(20));

CREATE TABLE IF NOT EXISTS vehicle( 
vehReg VARCHAR(10) PRIMARY KEY,  
vehMake VARCHAR(10),
vehModel VARCHAR(10), 
memID VARCHAR(10));
ALTER TABLE vehicle ADD FOREIGN KEY(memID) REFERENCES member(memID) ON DELETE CASCADE;

CREATE TABLE IF NOT EXISTS engineer( 
engID INT PRIMARY KEY,
engForename VARCHAR(20), 
engSurname VARCHAR(20));

CREATE TABLE IF NOT EXISTS engVan( 
vanReg VARCHAR(10) PRIMARY KEY,  
vanMake VARCHAR(10),
vanModel VARCHAR(10),
engID INT,
vanMileage INT);
ALTER TABLE engVan ADD FOREIGN KEY(engID) REFERENCES engineer(engID) ON DELETE CASCADE;

CREATE TABLE IF NOT EXISTS breakdown( 
bdID INT(10) PRIMARY KEY,
vehReg VARCHAR(10), 
vanReg VARCHAR(10), 
bdDate DATE,
bdTime TIME, 
bdLocation VARCHAR(20));
ALTER TABLE breakdown ADD FOREIGN KEY(vehReg) REFERENCES vehicle(vehReg) ON DELETE CASCADE;
ALTER TABLE breakdown ADD FOREIGN KEY(vanReg) REFERENCES engVan(vanReg) ON DELETE CASCADE;


-- TASK 2 - Enter Data

-- Member table – 5 records 
INSERT INTO member(memID, memForename, memSurname, memLocation) VALUES 
("ID250198MO","Melvin","Osei","London"),
("ID452204ZP","Zakirullah","Pardis","London"),
("ID127342MM","Miles","Morales","Liverpool"),
("ID616616PP","Peter","Parker","Birmingham"),
("ID123456JD","John","Doe","Manchester");

-- Vehicle table – 8 records 
INSERT INTO vehicle(vehReg, vehMake, vehModel, memID) VALUES 
("LD70 ABC","Ford","Puma","ID250198MO"),
("LN71 DEF","Vauxhall","Corsa","ID250198MO"),
("LD68 LMN","Vauxhall","Astra","ID452204ZP"),
("BH70 HJK","Nissan","Juke","ID616616PP"),
("BA72 CEG","Nissan","Qashqai","ID616616PP"),
("LV70 KCS","Ford","Kuga","ID127342MM"),
("MA70 QRS","Ford","Fiesta","ID123456JD"),
("MN71 XYZ","Ford","Focus","ID123456JD");

-- Engineer table – 3 records 
INSERT INTO engineer(engID, engForename, engSurname) VALUES 
(1,"Bruce","Wayne"),
(2,"Clark","Kent"),
(3,"Diana","Prince");

-- EngVan table – 5 records 
INSERT INTO engVan(vanReg, vanMake, vanModel, engID, vanMileage) VALUES 
("LN70 HIJ","Ford","Transit",2,2),
("LD71 KLM","Vauxhall","Vivaro",1,2),
("LN68 NPQ","Renault","Trafic",1,2),
("LN67 RST","Citroen","Berlingo",1,2),
("LD72 UVW","Vauxhall","Combo",3,2);

-- Breakdown table – 12 records 
INSERT INTO breakdown(bdID, vehReg, vanReg, bdDate, bdTime, bdLocation) VALUES
(142934905,"LV70 KCS","LN70 HIJ","2022-08-03","16:00","Liverpool"),
(248989503,"MA70 QRS","LN70 HIJ","2022-09-01","12:15","Manchester"),
(291061882,"BH70 HJK","LD72 UVW","2023-06-05","21:30","Birmingham"),
(358929846,"BA72 CEG","LN70 HIJ","2022-09-17","08:45","Newcastle"),
(627783898,"MA70 QRS","LD71 KLM","2022-11-17","06:45","Glasgow"),
(294897772,"LD70 ABC","LD71 KLM","2022-11-19","13:30","London"),
(152500339,"MN71 XYZ","LD72 UVW","2023-04-05","14:15","Manchester"),
(787650133,"MA70 QRS","LN67 RST","2022-10-31","15:00","Glasgow"),
(948329775,"BH70 HJK","LD72 UVW","2022-12-25","11:30","Birmingham"),
(385929885,"LN71 DEF","LD72 UVW","2023-01-25","10:00","London"),
(739316458,"LD70 ABC","LN67 RST","2022-11-01","09:30","Newcastle"),
(129081581,"LV70 KCS","LN68 NPQ","2022-12-25","17:15","Glasgow");
-- 2 breakdowns on same day, 3 breakdowns in same month, 3+ vehicles broken down more than once


-- TASK 3 - Perform queries
-- The names of members who live in a location e.g. London. 
SELECT * FROM member WHERE memLocation="London";
-- All cars registered with the company e.g. all Nissan cars.
SELECT * FROM vehicle WHERE vehMake="Nissan";
-- The number of engineers that work for the company. 
SELECT COUNT(*) AS "No. of Engineers" FROM engineer;
-- The number of members registered. 
SELECT COUNT(*) AS "No. of Members" FROM member;
-- All the breakdown after a particular date 
SELECT * FROM breakdown WHERE bdDate>="2023-01-01";
-- All the breakdown between 2 dates 
SELECT * FROM breakdown WHERE bdDate BETWEEN "2022-10-01" AND "2022-12-31";
-- The number of time a particular vehicle has broken down 
SELECT vehReg, COUNT(*) AS "No. of Breakdowns" FROM breakdown 
GROUP BY vehReg;
-- The number of vehicles broken down more than once 
SELECT vehReg, COUNT(*) AS "No. of Breakdowns" FROM breakdown 
GROUP BY vehReg HAVING COUNT(*)>1;


-- TAKE 4 - Create table 
CREATE TABLE IF NOT EXISTS mShipType(mtID INT PRIMARY KEY, mType VARCHAR(6), mPrice DECIMAL(4,2)); 
INSERT IGNORE INTO mShipType(mtID, mType, mPrice) VALUES
(1, "Gold", 99.99),
(2, "Silver", 59.99),
(3, "Bronze", 39.99);


-- TASK 5 - Alter and Update
-- Using the alter command add in the field “MTID” to the vehicle table, set it to FK and allow null.  
ALTER TABLE vehicle ADD mtID INT;
-- Then using the update command assign a MTID to each vehicle. 
UPDATE vehicle SET mtID=2 WHERE vehReg="LD70 ABC";
UPDATE vehicle SET mtID=1 WHERE vehReg="LN71 DEF";
UPDATE vehicle SET mtID=3 WHERE vehReg="LD68 LMN";
UPDATE vehicle SET mtID=2 WHERE vehReg="BH70 HJK";
UPDATE vehicle SET mtID=1 WHERE vehReg="BA72 CEG";
UPDATE vehicle SET mtID=2 WHERE vehReg="LV70 KCS";
UPDATE vehicle SET mtID=2 WHERE vehReg="MA70 QRS";
UPDATE vehicle SET mtID=1 WHERE vehReg="MN71 XYZ";

ALTER TABLE vehicle ADD FOREIGN KEY(mtID) REFERENCES mShipType(mtID);


-- TASK 6 - Perform Queries 
-- All the vehicles a member owns. 
SELECT vehReg, vehMake, vehModel, mem.memID, memForename, memSurname, memLocation FROM vehicle veh
RIGHT JOIN member mem ON veh.memID=mem.memID
ORDER BY memSurname, memForename;
-- The number of vehicles for each member in descending order. 
SELECT mem.memID, CONCAT(memForename," ",memSurname) AS "Member", COUNT(*) AS "Vehicles Owned" FROM vehicle veh
RIGHT JOIN member mem ON veh.memID=mem.memID
GROUP BY memID, memForename, memSurname
ORDER BY COUNT(*) DESC;
-- The number of vans driven by a particular engineer. 
SELECT eng.engID, CONCAT(engForename," ",engSurname) AS "Engineer", COUNT(*) AS "No. of Vans Driven" FROM engVan van
RIGHT JOIN engineer eng ON van.engID=eng.engID
GROUP BY engForename, engSurname, engID
ORDER BY engForename, engSurname;
-- All vehicles that have broken down in a particular location along with member details. 
SELECT veh.vehReg, vehMake, vehModel, bd.bdID, bdDate, bdTime, bdLocation, mem.memID, memForename, memSurname, memLocation FROM vehicle veh
RIGHT JOIN breakdown bd ON veh.vehReg=bd.vehReg
RIGHT JOIN member mem ON veh.memID=mem.memID;
-- A list of all vehicles that broke down along with the member details and the engineer who attended 
SELECT veh.vehReg, vehMake, vehModel, bd.bdID, bdDate, bdTime, bdLocation, mem.memID, memForename, memSurname, memLocation, eng.engID, engForename, engSurname 
FROM vehicle veh
RIGHT JOIN breakdown bd ON veh.vehReg=bd.vehReg
RIGHT JOIN member mem ON veh.memID=mem.memID
JOIN engVan van ON bd.vanReg=van.vanReg
RIGHT JOIN engineer eng ON van.engID=eng.engID;
-- A list of all breakdown along with member and engineer details between two dates. 
SELECT veh.vehReg, vehMake, vehModel, bd.bdID, bdDate, bdTime, bdLocation, mem.memID, memForename, memSurname, memLocation, eng.engID, engForename, engSurname 
FROM vehicle veh
RIGHT JOIN breakdown bd ON veh.vehReg=bd.vehReg
RIGHT JOIN member mem ON veh.memID=mem.memID
JOIN engVan van ON bd.vanReg=van.vanReg
RIGHT JOIN engineer eng ON van.engID=eng.engID
WHERE bdDate BETWEEN "2022-01-01" AND "2022-10-01";
-- A further 3 relational queries of your choice that are meaningful to the company. 


-- TASK 7 
-- Using W3Schools or any other resource research the following functions – Avg, Max, Min, Sum.  Explain with examples how each one is used.  Create a separate database with sample data to illustrate your examples.  However please do not copy from the websites. 
SELECT ROUND(AVG(mPrice),2) FROM mShipType; -- the Average value from all the mPrice data in the mShipType table
SELECT MAX(mPrice) FROM mShipType; -- the Maximum (biggest) value from all mPrice data in the mShipType table
SELECT MIN(mPrice) FROM mShipType; -- the Minimum (smallest) value from all mPrice data in the mShipType table
SELECT SUM(mPrice) FROM mShipType; -- the Sum total value of all the mPrice data in the mShipType table

-- TASK 8 
-- For 2 can say if greater than one vehicle owned then has multi-car policy 
SELECT mem.memID, memForename, memSurname, COUNT(*) AS "No. of Vehicles Owned", CASE 
WHEN COUNT(*)>1 THEN "Yes"
ELSE "No" END AS "Multi-Car Policy"
FROM member mem
LEFT JOIN vehicle veh ON mem.memID=veh.memID
GROUP BY memID, memForename, memSurname;
-- The number of times each car broken down 
SELECT veh.vehReg, COUNT(*) AS "No. of Breakdowns", mem.memID, memForename, memSurname FROM vehicle veh
LEFT JOIN breakdown bd ON veh.vehReg=bd.vehReg
LEFT JOIN member mem ON veh.memID=mem.memID
GROUP BY veh.vehReg, mem.memID, memForename, memSurname;

SELECT veh.vehReg, COUNT(*) AS "No. of Breakdowns", 
mType, mPrice, CASE
WHEN COUNT(*)>2 THEN "Increase by 10%" -- If more than twice then next premium to be increased by 10% 
WHEN COUNT(*)=2 THEN "Increase by 5%" -- If twice then increase by 5% 
WHEN COUNT(*)=1 THEN "No Increase" -- If once then no increase 
ELSE "10% Discount" END -- If not broken down then 10% discount
AS "Premium", CASE
WHEN COUNT(*)>2 THEN ROUND(mPrice*1.1,2) 
WHEN COUNT(*)=2 THEN ROUND(mPrice*1.05,2) 
WHEN COUNT(*)=1 THEN mPrice
ELSE ROUND(mPrice*0.9,2) END
AS "mPrice after Premium" 
FROM vehicle veh
LEFT JOIN breakdown bd ON veh.vehReg=bd.vehReg
LEFT JOIN mShipType ms ON veh.mtID=ms.mtID
GROUP BY veh.vehReg, mType, mPrice;