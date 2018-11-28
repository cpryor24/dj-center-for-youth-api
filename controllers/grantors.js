const knex = require("../db/knex.js");

module.exports = {
  index: (req, res) => {
    knex('grantors')
      .then(results => {
        res.json(results);
      })
  },
  show: (req, res) => {
    knex('grantors')
      .where('id', req.params.id)
      .then(result => {
        res.json(result[0]);
      })
      .catch(err => console.log(err));
  },
  create: (req, res) => {
    let { title, description } = req.body;
    knex('grantors')
      .insert({
        title,
        description
      })
      .then(() => {
        res.sendStatus(200);
      })
      .catch(err => console.log(err));
  },
  update: (req, res) => {
    let { title, description} = req.body;
    knex('grantors')
      .where('id', req.params.id)
      .update({
        title,
        description
      })
      .then(() => {
        res.sendStatus(200);
      })
      .catch(err => console.log(err));
  },
  delete: (req, res) => {
    knex('grantors')
      .where('id', req.params.id)
      .del()
      .then(() => {
        res.sendStatus(200);
      })
      .catch(err => console.log(err));
  }
}
