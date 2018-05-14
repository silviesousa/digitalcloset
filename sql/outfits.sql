DROP TABLE if exists outfits;

create table outfits(
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),

);
