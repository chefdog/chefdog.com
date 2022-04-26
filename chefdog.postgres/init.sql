create database "cfg-keystone-db";
create user "cfg-keystone-db-admin" with encrypted password '1ch@fdog33';
grant all privileges on database "cfg-keystone-db" to "cfg-keystone-db-admin";