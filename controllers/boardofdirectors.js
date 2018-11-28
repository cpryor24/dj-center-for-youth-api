const knex = require("../db/knex.js");

module.exports = {
  index: (req, res) => {
    knex('boardOfDirectors')
      .then(results => {
        res.json(results);
      })
  },
  show: (req, res) => {
    knex('boardOfDirectors')
      .where('id', req.params.id)
      .then(result => {
        res.json(result[0]);
      })
      .catch(err => console.log(err));
  },
  create: (req, res) => {
    let { first_name, last_name, title } = req.body;
    knex('boardOfDirectors')
      .insert({
        first_name,
        last_name,
        title
      })
      .then(() => {
        res.sendStatus(200);
      })
      .catch(err => console.log(err));
  },
  update: (req, res) => {
    let { first_name, last_name, title} = req.body;
    knex('boardOfDirectors')
      .where('id', req.params.id)
      .update({
        first_name,
        last_name,
        title
      })
      .then(() => {
        res.sendStatus(200);
      })
      .catch(err => console.log(err));
  },
  delete: (req, res) => {
    knex('boardOfDirectors')
      .where('id', req.params.id)
      .del()
      .then(() => {
        res.sendStatus(200);
      })
      .catch(err => console.log(err));
  }
}
