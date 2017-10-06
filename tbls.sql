create table users(username varchar(30), pwd varchar(30), location varchar(30), primary key(username), foreign key(location) references locations(id));
create table locations(id varchar(30), background varchar(100), level int, primary key(id));
create table characters(username varchar(30), tag varchar(30), primary key(username), foreign key(username) references users(username));