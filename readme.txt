#needs to be called before migration
CREATE DATABASE wholesaler;
# use command 'sequelize db:migrate' to migrate tables
#populate tables
USE wholesaler;
#populate wholesalers table
INSERT INTO wholesalers (name, mobile_number, createdAt, updatedAt) VALUES ("Om Prakash", "+91 9932199546", now(), now());
INSERT INTO wholesalers (name, mobile_number, createdAt, updatedAt) VALUES ("Rakesh Sharma","+91 7874416952", now(), now());
INSERT INTO wholesalers (name, mobile_number, createdAt, updatedAt) VALUES ("Shubhash Agarwal","+91 9865482820", now(), now());
INSERT INTO wholesalers (name, mobile_number, createdAt, updatedAt) VALUES ("Yusuf Khan","+91 8755854695", now(), now());
INSERT INTO wholesalers (name, mobile_number, createdAt, updatedAt) VALUES ("Carl Kahn","+44 69584752", now(), now());
INSERT INTO wholesalers (name, mobile_number, createdAt, updatedAt) VALUES ("Shruti Jain","+91 9549584816", now(), now());
INSERT INTO wholesalers (name, mobile_number, createdAt, updatedAt) VALUES ("Hari Om Sweets","+91 58444752", now(), now());
INSERT INTO wholesalers (name, mobile_number, createdAt, updatedAt) VALUES ("Bosch","+44 45144752", now(), now());
INSERT INTO wholesalers (name, mobile_number, createdAt, updatedAt) VALUES ("Finolex Cables","+44 69454452", now(), now());
INSERT INTO wholesalers (name, mobile_number, createdAt, updatedAt) VALUES ("Kiran Garg","+91 9969454752", now(), now());

#populate retailers table
INSERT INTO retailers (name, mobile_number, createdAt, updatedAt) VALUES ("Ram Nath Puri","+91 9599891525", now(), now());
INSERT INTO retailers (name, mobile_number, createdAt, updatedAt) VALUES ("Gita Jain","+91 9166723498", now(), now());
INSERT INTO retailers (name, mobile_number, createdAt, updatedAt) VALUES ("Bhagwati Sweets","+91 9429874365", now(), now());
INSERT INTO retailers (name, mobile_number, createdAt, updatedAt) VALUES ("Krishna","+91 7826439856", now(), now());
INSERT INTO retailers (name, mobile_number, createdAt, updatedAt) VALUES ("Mangal Sen","+91 9945762148", now(), now());
INSERT INTO retailers (name, mobile_number, createdAt, updatedAt) VALUES ("Twenty Four Seven","+1 685-259-3845", now(), now());
INSERT INTO retailers (name, mobile_number, createdAt, updatedAt) VALUES ("Baniya General Store","+91 9814683249", now(), now());
INSERT INTO retailers (name, mobile_number, createdAt, updatedAt) VALUES ("Jatin Yadav","+91 9745631986", now(), now());
INSERT INTO retailers (name, mobile_number, createdAt, updatedAt) VALUES ("Shubham Aggarwal","+91 9965471398", now(), now());
INSERT INTO retailers (name, mobile_number, createdAt, updatedAt) VALUES ("Kishan Garg","+91 9715349341", now(), now());

# populate stocks table
DROP PROCEDURE populate;
DELIMITER $$
CREATE PROCEDURE populate()
    BEGIN
        DECLARE i INT;
        DECLARE j INT;
        DECLARE d VARCHAR(255);
        SET i = 1;
        WHILE i <= 12 DO #from 1 to 12 months
			SET j = 1;
            SET  d = CONCAT('2021-', i, '-28');
            WHILE j <= 5 DO # limiting to 5 stock trades per month
				INSERT INTO stocks (wholesaler_id, retailer_id, stock_amount, date, createdAt, updatedAt) VALUES (CEIL(RAND() * (10)),CEIL(RAND() * (10)),1000 + CEIL(RAND() * (100000 - 1000)), DATE (d), now(), now());
                SET j = j + 1;
			END WHILE;
            SET i = i +1;
		END WHILE;
        COMMIT;
    END$$
DELIMITER ;

CALL  populate();