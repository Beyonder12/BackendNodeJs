/*
Simple Database Querying

There are USER Table which has 3 column : ID, UserName, Parent. Where:
ID column is primary key
UserName column is name of user
Parent column is ID from User which is creator for certain User

*/


/*
Here the solution
Assumption there is USER Table and CREATOR Table
This basic querying by MySQL syntax using concept intersection or INNER JOIN

*/

SELECT ID, UserName, ParentUserName FROM USER INNER JOIN CREATOR ON USER.PARENT = CREATOR.ID;
