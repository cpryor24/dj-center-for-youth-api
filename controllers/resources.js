const knex = require("../db/knex.js");

module.exports = {
  index: (req, res) => {
    knex('resources')
      .then(results => {
        res.json(results);
      })
  },
  show: (req, res) => {
    knex('resources')
      .where('id', req.params.id)
      .then(result => {
        res.json(result[0]);
      })
      .catch(err => console.log(err));
  },
  create: (req, res) => {
    let { business_name, url } = req.body;
    knex('resources')
      .insert({
        business_name,
        url
      })
      .then(() => {
        res.sendStatus(200);
      })
      .catch(err => console.log(err));
  },
  update: (req, res) => {
    let { business_name, url} = req.body;
    knex('resources')
      .where('id', req.params.id)
      .update({
        business_name,
        url
      })
      .then(() => {
        res.sendStatus(200);
      })
      .catch(err => console.log(err));
  },
  delete: (req, res) => {
    knex('resources')
      .where('id', req.params.id)
      .del()
      .then(() => {
        res.sendStatus(200);
      })
      .catch(err => console.log(err));
  }
}
