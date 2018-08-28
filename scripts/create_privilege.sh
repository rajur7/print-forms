INSERT_PRIVILEGE="INSERT IGNORE INTO privilege VALUES ('app:print-forms', 'Will give access to print forms app', UUID());";

mysql -uroot -p openmrs -Bse "${INSERT_PRIVILEGE}";
