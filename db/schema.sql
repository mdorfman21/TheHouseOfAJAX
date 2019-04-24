ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
flush privileges;
ALTER USER 'root'@'localhost' IDENTIFIED BY '';

-- drop the database if it exists --
DROP DATABASE IF EXISTS holdMySpot_dev;

--create the database --
CREATE DATABASE holdMySpot_dev;
