-- //HERE IS WHERE YOUR SQL SCRIPTS WILL BE PLACED
-- // create your DB
-- Drops the todolist if it exists currently --
DROP DATABASE IF EXISTS Orchard;
-- Creates the "todolist" database --
CREATE DATABASE Orchard;



USE Orchard;

INSERT INTO `orchard`.`categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES ('1', 'Fruits', '2020-08-01 11:22:22', '2020-08-01 11:22:22');
INSERT INTO `orchard`.`categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES ('2', 'Vegetable', '2020-08-01 11:22:22', '2020-08-01 11:22:22');
INSERT INTO `orchard`.`categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES ('3', 'Flower', '2020-08-01 11:22:22', '2020-08-01 11:22:22');
INSERT INTO `orchard`.`categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES ('4', 'Succulent', '2020-08-01 11:22:22', '2020-08-01 11:22:22');


INSERT INTO `orchard`.`inventories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES ('1', 'Orchard', '2020-08-01 11:22:22', '2020-08-01 11:22:22');

INSERT INTO `orchard`.`employees` (`id`, `username`, `first_name`, `last_name`, `email`, `password`, `createdAt`, `updatedAt`, `InventoryId`) VALUES ('1', 'Steve_Munoz', 'Steve', 'Munoz', 'SteveMunoz@orhcard.com', 'password123', '2020-08-01 11:22:22', '2020-08-01 11:22:22', '1');
INSERT INTO `orchard`.`employees` (`id`, `username`, `first_name`, `last_name`, `email`, `password`, `createdAt`, `updatedAt`, `InventoryId`) VALUES ('2', 'Adrian_Palacios', 'Adrian', 'Palacios', 'AdrianPalacios@orchard.com', 'password123', '2020-08-01 11:22:22', '2020-08-01 11:22:22', '1');
INSERT INTO `orchard`.`employees` (`id`, `username`, `first_name`, `last_name`, `email`, `password`, `createdAt`, `updatedAt`, `InventoryId`) VALUES ('3', 'Stephanie_Landgraf', 'Stephanie', 'Landgraf', 'StephanieLandgraf@orchard.com', 'password123', '2020-08-01 11:22:22', '2020-08-01 11:22:22', '1');
INSERT INTO `orchard`.`employees` (`id`, `username`, `first_name`, `last_name`, `email`, `password`, `createdAt`, `updatedAt`, `InventoryId`) VALUES ('4', 'Juliet_Goldstein', 'Juliet', 'Goldstein', 'JulietGoldstein@orchard.com', 'password123', '2020-08-01 11:22:22', '2020-08-01 11:22:22', '1');

INSERT INTO `orchard`.`items` (`id`, `name`, `quantity`, `price`, `date_received`, `exp_date`, `createdAt`, `updatedAt`, `InventoryId`, `CategoryId`) VALUES ('1', 'Banana', '30', '.41', '2020-08-04 11:22:22', '2020-08-09 11:22:22', '2020-08-04 11:22:22', '2020-08-04 11:22:22', '1', '1');
INSERT INTO `orchard`.`items` (`id`, `name`, `quantity`, `price`, `date_received`, `exp_date`, `createdAt`, `updatedAt`, `InventoryId`, `CategoryId`) VALUES ('2', 'Mango', '30', '1.01', '2020-08-04 11:22:22', '2020-08-09 11:22:22', '2020-08-04 11:22:22', '2020-08-04 11:22:22', '1', '1');
INSERT INTO `orchard`.`items` (`id`, `name`, `quantity`, `price`, `date_received`, `exp_date`, `createdAt`, `updatedAt`, `InventoryId`, `CategoryId`) VALUES ('3', 'Watermelon Personal Size', '30', '3.07', '2020-08-04 11:22:22', '2020-08-09 11:22:22', '2020-08-04 11:22:22', '2020-08-04 11:22:22', '1', '1');
INSERT INTO `orchard`.`items` (`id`, `name`, `quantity`, `price`, `date_received`, `exp_date`, `createdAt`, `updatedAt`, `InventoryId`, `CategoryId`) VALUES ('4', 'Pomegranate', '30', '.63', '2020-08-04 11:22:22', '2020-08-09 11:22:22', '2020-08-04 11:22:22', '2020-08-04 11:22:22', '1', '1');
INSERT INTO `orchard`.`items` (`id`, `name`, `quantity`, `price`, `date_received`, `exp_date`, `createdAt`, `updatedAt`, `InventoryId`, `CategoryId`) VALUES ('5', 'Plum', '30', '.92', '2020-08-04 11:22:22', '2020-08-09 11:22:22', '2020-08-04 11:22:22', '2020-08-04 11:22:22', '1', '1');
INSERT INTO `orchard`.`items` (`id`, `name`, `quantity`, `price`, `date_received`, `exp_date`, `createdAt`, `updatedAt`, `InventoryId`, `CategoryId`) VALUES ('6', 'Eggplant', '20', '1.65', '2020-08-04 11:22:22', '2020-08-09 11:22:22', '2020-08-04 11:22:22', '2020-08-04 11:22:22', '1', '2');
INSERT INTO `orchard`.`items` (`id`, `name`, `quantity`, `price`, `date_received`, `exp_date`, `createdAt`, `updatedAt`, `InventoryId`, `CategoryId`) VALUES ('7', 'Red Onion', '20', '.84', '2020-08-04 11:22:22', '2020-08-09 11:22:22', '2020-08-04 11:22:22', '2020-08-04 11:22:22', '1', '2');
INSERT INTO `orchard`.`items` (`id`, `name`, `quantity`, `price`, `date_received`, `exp_date`, `createdAt`, `updatedAt`, `InventoryId`, `CategoryId`) VALUES ('8', 'Tomato', '20', '.28', '2020-08-04 11:22:22', '2020-08-09 11:22:22', '2020-08-04 11:22:22', '2020-08-04 11:22:22', '1', '2');
INSERT INTO `orchard`.`items` (`id`, `name`, `quantity`, `price`, `date_received`, `exp_date`, `createdAt`, `updatedAt`, `InventoryId`, `CategoryId`) VALUES ('9', 'Sweet Potato', '20', '1.22', '2020-08-04 11:22:22', '2020-08-09 11:22:22', '2020-08-04 11:22:22', '2020-08-04 11:22:22', '1', '2');
INSERT INTO `orchard`.`items` (`id`, `name`, `quantity`, `price`, `date_received`, `exp_date`, `createdAt`, `updatedAt`, `InventoryId`, `CategoryId`) VALUES ('10', 'Beet', '20', '2.04', '2020-08-04 11:22:22', '2020-08-09 11:22:22', '2020-08-04 11:22:22', '2020-08-04 11:22:22', '1', '2');
INSERT INTO `orchard`.`items` (`id`, `name`, `quantity`, `price`, `date_received`, `exp_date`, `createdAt`, `updatedAt`, `InventoryId`, `CategoryId`) VALUES ('11', 'Red Roses - Dozen -1 bundle', '5', '10.18', '2020-08-04 11:22:22', '2020-08-09 11:22:22', '2020-08-04 11:22:22', '2020-08-04 11:22:22', '1', '3');
INSERT INTO `orchard`.`items` (`id`, `name`, `quantity`, `price`, `date_received`, `exp_date`, `createdAt`, `updatedAt`, `InventoryId`, `CategoryId`) VALUES ('12', 'Orchis - 5 in', '5', '20.58', '2020-08-04 11:22:22', '2020-08-09 11:22:22', '2020-08-04 11:22:22', '2020-08-04 11:22:22', '1', '3');
INSERT INTO `orchard`.`items` (`id`, `name`, `quantity`, `price`, `date_received`, `exp_date`, `createdAt`, `updatedAt`, `InventoryId`, `CategoryId`) VALUES ('13', 'Sunflowers - 1 bundle', '5', '10.28', '2020-08-04 11:22:22', '2020-08-09 11:22:22', '2020-08-04 11:22:22', '2020-08-04 11:22:22', '1', '3');
INSERT INTO `orchard`.`items` (`id`, `name`, `quantity`, `price`, `date_received`, `exp_date`, `createdAt`, `updatedAt`, `InventoryId`, `CategoryId`) VALUES ('14', 'Snake Plant - 4\" Pot', '5', '8.99', '2020-08-04 11:22:22', '2020-08-09 11:22:22', '2020-08-04 11:22:22', '2020-08-04 11:22:22', '1', '4');
INSERT INTO `orchard`.`items` (`id`, `name`, `quantity`, `price`, `date_received`, `exp_date`, `createdAt`, `updatedAt`, `InventoryId`, `CategoryId`) VALUES ('15', 'Sunset Jade Plant- House Plant - 4\" Pot', '5', '12.50', '2020-08-04 11:22:22', '2020-08-09 11:22:22', '2020-08-04 11:22:22', '2020-08-04 11:22:22', '1', '4');
INSERT INTO `orchard`.`items` (`id`, `name`, `quantity`, `price`, `date_received`, `exp_date`, `createdAt`, `updatedAt`, `InventoryId`, `CategoryId`) VALUES ('16', 'Chinese Evergreen- House Plant - 4\" Pot', '5', '18.99', '2020-08-04 11:22:22', '2020-08-09 11:22:22', '2020-08-04 11:22:22', '2020-08-04 11:22:22', '1', '4');
