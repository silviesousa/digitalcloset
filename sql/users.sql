DROP TABLE if exists users;

create table users(
    id serial primary key,
    first varchar(250) not null,
    last varchar(250) not null,
    email varchar(250) not null unique,
    password varchar (250) not null,
    image varchar (200)
);
