DROP DATABASE IF EXISTS WEB601_A2_Server_Side_Project;
CREATE DATABASE WEB601_A2_Server_Side_Project;
USE WEB601_A2_Server_Side_Project;

DROP PROCEDURE if EXISTS TableMaker;
Delimiter $$
CREATE PROCEDURE TableMaker()
BEGIN

	DROP TABLE IF EXISTS Customers;
	DROP TABLE IF EXISTS OrderStatus;
    DROP TABLE IF EXISTS Orders;
	DROP TABLE IF EXISTS OrderDetails;
    DROP TABLE IF EXISTS Categories;
    DROP TABLE IF EXISTS Products;
    DROP TABLE IF EXISTS ShoppingCart;
    
    CREATE TABLE Customers(
		CustomerID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
		CustomerName VARCHAR(30) NOT NULL,
        CustomerEmail VARCHAR(30) NOT NULL,
        CustomerPassword VARCHAR(30) NOT NULL  
	);
    
    CREATE TABLE OrderStatus(
		OrderStatusID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
		Details VARCHAR(255)
	);
    
    CREATE TABLE Orders(
		OrderID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        CustomerID INT NOT NULL,
        OrderStatusID INT NOT NULL,
        FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID),
        FOREIGN KEY (OrderStatusID) REFERENCES OrderStatus(OrderStatusID)
	);
    
    CREATE TABLE OrderDetails(
		OrderID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        CustomerID INT NOT NULL,
        TotalCost INT NOT NULL,
        FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
    );
    
    CREATE TABLE Categories(
		CategorieID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        CategorieName VARCHAR(30) NOT NULL
    );
    
    CREATE TABLE Products(
		ProductID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
		ProductName VARCHAR(30) NOT NULL,
        ProductCost INT NOT NULL,
        CategorieID INT NOT NULL,
		FOREIGN KEY (CategorieID) REFERENCES Categories(CategorieID)
    );
    
    CREATE TABLE ShoppingCart(
		CartID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        Quantity INT DEFAULT 0 NOT NULL,
        Total INT DEFAULT 0 NOT NULL
    );
        
    CREATE TABLE SessionTbl(
		SessionID INT PRIMARY KEY auto_increment,
		CustomerID INT NULL,
		ProductID INT NULL,
		CartID INT NULL,
		FOREIGN KEY (CustomerID) REFERENCES Customers (CustomerID) ON DELETE CASCADE ON UPDATE CASCADE,
		FOREIGN KEY (ProductID) REFERENCES Products (ProductID) ON DELETE CASCADE ON UPDATE CASCADE,
		FOREIGN KEY (CartID) REFERENCES ShoppingCart (CartID) ON DELETE CASCADE ON UPDATE CASCADE
	);
    
END $$
delimiter ;
	CALL TableMaker();