DROP TABLE if exists outfits;

create table outfits(
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    top_id VARCHAR NOT NULL,
    bottom_id VARCHAR NOT NULL,
    footwear_id VARCHAR NOT NULL,
    tag VARCHAR
);
