const knex = require("../db/knex.js");

module.exports = {
  index: (req, res) => {
    knex('awards')
      .then(results => {
        res.json(results);
      })
  },
  show: (req, res) => {
    knex('awards')
      .where('id', req.params.id)
      .then(result => {
        res.json(result[0]);
      })
      .catch(err => console.log(err));
  },
  create: (req, res) => {
    let { year, award_name } = req.body;
    knex('awards')
      .insert({
        year,
        award_name
      })
      .then(() => {
        res.sendStatus(200);
      })
      .catch(err => console.log(err));
  },
  update: (req, res) => {
    let { year, award_name} = req.body;
    knex('awards')
      .where('id', req.params.id)
      .update({
        year,
        award_name
      })
      .then(() => {
        res.sendStatus(200);
      })
      .catch(err => console.log(err));
  },
  delete: (req, res) => {
    knex('awards')
      .where('id', req.params.id)
      .del()
      .then(() => {
        res.sendStatus(200);
      })
      .catch(err => console.log(err));
  }
}
