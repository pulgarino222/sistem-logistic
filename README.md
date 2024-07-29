# sistem-logistic

CREATE TABLE drivers(
id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(155) NOT NULL

);

CREATE TABLE vehicles(
id INT PRIMARY KEY AUTO_INCREMENT,
model VARCHAR(100) NOT NULL,
year YEAR, 
FOREIGN KEY(driversID) REFERENCES drivers(id)
);

CREATE TABLE warehouses(
id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(100) not null,
location varchar(200),
FOREIGN KEY (drivers_id) REFERENCES drivers(id) ,
FOREIGN KEY (vehicles_id) REFERENCES vehicles(id)

);

CREATE TABLE shipments(
id INT PRIMARY KEY AUTO_INCREMENT,
item VARCHAR(150) NOT NULL,
quantity INT,
FOREIGN KEY (wharehouseID) REFERENCES warehouses(id),
FOREIGN KEY (vehiclesID) REFERENCES vehicles(id),
FOREIGN KEY(driversID) REFERENCES  drivers(id)
);
