const db = require("../db/dbConfig.js");

const getAllMeta = async () => {
  try {
    return await db.any("SELECT * FROM meta");
  } catch (error) {
    return error;
  }
};

const getMeta = async (id) => {
  try {
    return await db.one("SELECT * FROM meta WHERE id=$1", id);
  } catch (error) {
    return error;
  }
};

const createMeta = async (meta) => {
  try {
    return await db.one(
      "INSERT INTO meta (name, wins, loss, age, height, weight, reach, born, image) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *",
      [
        meta.name,
        meta.wins,
        meta.loss,
        meta.age,
        meta.height,
        meta.weight,
        meta.reach,
        meta.born,
        meta.image,
      ]
    );
  } catch (error) {
    return error;
  }
};

const updateMeta = async (meta, id) => {
  try {
    return await db.one(
      "UPDATE meta SET name=$1, wins=$2, loss=$3, age=$4, height=$5, weight=$6, reach=$7, born=$8, image=$9 RETURNING *",
      [
        meta.name,
        meta.wins,
        meta.loss,
        meta.age,
        meta.height,
        meta.weight,
        meta.reach,
        meta.born,
        meta.image,
        id,
      ]
    );
  } catch (error) {
    return error;
  }
};

const deleteMeta = async (id) => {
  try {
    return await db.one("DELETE FROM meta WHERE id=$1 RETURNING *", id);
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllMeta,
  getMeta,
  createMeta,
  updateMeta,
  deleteMeta,
};
