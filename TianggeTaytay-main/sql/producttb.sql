use tianggedb;

UPDATE producttb
SET date_created = '2024-11-01 10:00:00', date_updated = '2024-11-10 12:00:00'
WHERE productid = 72;

UPDATE producttb
SET date_created = '2024-11-02 11:00:00', date_updated = '2024-11-11 13:00:00'
WHERE productid = 73;

UPDATE producttb
SET date_created = '2024-11-03 12:00:00', date_updated = '2024-11-12 14:00:00'
WHERE productid = 74;

UPDATE producttb
SET date_created = '2024-11-04 13:00:00', date_updated = '2024-11-13 15:00:00'
WHERE productid = 78;

UPDATE producttb
SET date_created = '2024-11-05 14:00:00', date_updated = '2024-11-14 16:00:00'
WHERE productid = 79;

UPDATE producttb
SET date_created = '2024-11-06 15:00:00', date_updated = '2024-11-15 17:00:00'
WHERE productid = 80;

UPDATE producttb
SET date_created = '2024-11-07 16:00:00', date_updated = '2024-11-16 18:00:00'
WHERE productid = 81;

UPDATE producttb
SET date_created = '2024-11-08 17:00:00', date_updated = '2024-11-17 19:00:00'
WHERE productid = 82;

UPDATE producttb
SET date_created = '2024-11-09 18:00:00', date_updated = '2024-11-18 20:00:00'
WHERE productid = 83;

UPDATE producttb
SET date_created = '2024-11-10 19:00:00', date_updated = '2024-11-19 21:00:00'
WHERE productid = 84;

UPDATE producttb
SET date_created = '2024-11-11 20:00:00', date_updated = '2024-11-20 22:00:00'
WHERE productid = 85;

UPDATE producttb
SET date_created = '2024-11-12 21:00:00', date_updated = '2024-11-21 23:00:00'
WHERE productid = 86;

UPDATE producttb
SET date_created = '2024-11-13 22:00:00', date_updated = '2024-11-22 00:00:00';

UPDATE producttb
SET date_created = '2024-11-14 23:00:00', date_updated = '2024-11-23 01:00:00'
WHERE productid = 88;

UPDATE producttb
SET date_created = '2024-11-15 00:00:00', date_updated = '2024-11-24 02:00:00'
WHERE productid = 89;

UPDATE producttb
SET date_created = '2024-11-16 01:00:00', date_updated = '2024-11-25 03:00:00'
WHERE productid = 90;

UPDATE producttb
SET date_created = '2024-11-17 02:00:00', date_updated = '2024-11-26 04:00:00'
WHERE productid = 91;

UPDATE producttb
SET date_created = '2024-11-18 03:00:00', date_updated = '2024-11-27 05:00:00'
WHERE productid = 92;

UPDATE producttb
SET date_created = '2024-11-19 04:00:00', date_updated = '2024-11-28 06:00:00'
WHERE productid = 93;

UPDATE producttb
SET date_created = '2024-11-20 05:00:00', date_updated = '2024-11-29 07:00:00'
WHERE productid = 94;




CREATE TABLE views_tb (
    id INT AUTO_INCREMENT PRIMARY KEY,
    productid INT NOT NULL,
    views_count INT NOT NULL DEFAULT 0,
    FOREIGN KEY (productid) REFERENCES producttb(productid)
);


INSERT INTO views_tb (productid, views_count) VALUES
(72, 150),
(73, 200),
(74, 175),
(78, 50),
(79, 220),
(80, 180),
(81, 90),
(82, 210),
(83, 300),
(84, 310),
(85, 400),
(86, 350),
(87, 240),
(88, 125),
(89, 275),
(90, 180),
(91, 200),
(92, 100),
(93, 320),
(94, 150);

