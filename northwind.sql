DROP DATABASE IF EXISTS Northwind ;
CREATE DATABASE IF NOT EXISTS `Northwind ` 
DEFAULT CHARACTER SET latin1 COLLATE latin1_general_cs;

DROP TABLE IF EXISTS Suppliers;
CREATE TABLE IF NOT EXISTS Suppliers(
	supplierID int UNSIGNED AUTO_INCREMENT NOT NULL,
    company_name varchar(30),
    contact_name varchar(30),
    contact_title varchar(30),
	address varchar(30),
    city varchar(30),
    region varchar(30),
    postal_code int,
    country VARCHAR(30),
    phone int,
    fax varchar(30),
    home_page varchar(30)
    );
    ALTER TABLE Suppliers
    ADD CONSTRAINT PK_Suppliers PRIMARY KEY(supplierID);
DROP TABLE IF EXISTS Categories;
CREATE TABLE IF NOT EXISTS Categories(
	categoryID int UNSIGNED AUTO_INCREMENT NOT NULL,
    category_name varchar(30),
    descript varchar(30),
    picture varchar(30)
    );
ALTER TABLE Categories
ADD CONSTRAINT PK_Category PRIMARY KEY(categoryID);

DROP TABLE IF EXISTS Products;
CREATE TABLE IF NOT EXISTS Products(
	productID int UNSIGNED AUTO_INCREMENT NOT NULL,
    product_name varchar(30),
    supplier_id int,
    category_id int,
    quantity_per_unit int, 
    unit_price float,
    unit_in_stock int,
    units_on_order int,
    reorder_level varchar(30),
    discontinued varchar(30)
    );
ALTER TABLE Products
ADD CONSTRAINT PK_Products PRIMARY KEY(productID);


    




    
    
    