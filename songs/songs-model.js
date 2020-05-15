const db = require("../data/config");

async function find() {
  return db("songs");
}

async function findById(id) {
  return db("songs").where("id", id).first();
}

module.exports = {
  find,
  findById,
};
