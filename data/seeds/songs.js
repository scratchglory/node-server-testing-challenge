exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("songs").truncate();
  await knex("songs").insert([
    { name: "classical" },
    { name: "rock" },
    { name: "pop" },
    { name: "techno" },
  ]);
};
