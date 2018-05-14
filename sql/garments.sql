DROP TABLE if exists garments;

create table garments(
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    category VARCHAR NOT NULL,
    tag VARCHAR,
    imageGar VARCHAR (200)
);
