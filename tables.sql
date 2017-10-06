drop database if exists asx;
create database asx;
use asx;

create table locations(
id varchar(30),
primary key(id));

create table characters(
id int auto_increment,
lvl int,
exp int,
strength int,
dexteriety int,
perception int,
intelligence int,
speed int,
primary key(id));

create table users(
username varchar(30),
pwd varchar(30),
location varchar(30),
character_id int,
primary key(username),
foreign key(location) references locations(id),
foreign key(character_id) references characters(id));

create table elements(
id int auto_increment,
location varchar(30),
x int,
y int,
w int,
h int,
x1 int,
y1 int,
x2 int,
y2 int,
img varchar(50),
primary key(id),
foreign key(location) references locations(id));

create table enemies(
id varchar(30),
name varchar(30),
strength int,
dexteriety int,
perception int,
intelligence int,
speed int,
spawn float,
primary key(id));

create table location_enemies(
location varchar(30),
enemy varchar(30),
foreign key(location) references locations(id),
foreign key(enemy) references enemies(id));


