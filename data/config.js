const knex = require("knex");
const knexfile = require("../knexfile");

// module.exports = knex(knexfile);
// can specify which database to connect to
// can lookup a value in an obj using a var as the key name if its wrapped in square brackets
module.exports = knex(knexfile[process.env.NODE_ENV]);
