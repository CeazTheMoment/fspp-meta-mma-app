DROP DATABASE IF EXISTS meta_mma;
CREATE DATABASE meta_mma;

\c meta_mma;

CREATE TABLE meta(
    id      SERIAL PRIMARY KEY,
    name    TEXT NOT NULL,
    wins    INT,
    loss    INT,
    age     INT,
    height  INT,
    weight  INT,
    reach   INT,
    born    TEXT NOT NULL,
    image   TEXT
);