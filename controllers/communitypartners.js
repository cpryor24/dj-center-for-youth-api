const knex = require("../db/knex.js");

module.exports = {
  index: (req, res) => {
    knex('communityPartners')
      .then(results => {
        res.json(results);
      })
  },
  show: (req, res) => {
    knex('communityPartners')
      .where('id', req.params.id)
      .then(result => {
        res.json(result[0]);
      })
      .catch(err => console.log(err));
  },
  create: (req, res) => {
    let { company_name, url } = req.body;
    knex('communityPartners')
      .insert({
        company_name,
        url
      })
      .then(() => {
        res.sendStatus(200);
      })
      .catch(err => console.log(err));
  },
  update: (req, res) => {
    let { company_name, url} = req.body;
    knex('communityPartners')
      .where('id', req.params.id)
      .update({
        company_name,
        url
      })
      .then(() => {
        res.sendStatus(200);
      })
      .catch(err => console.log(err));
  },
  delete: (req, res) => {
    knex('communityPartners')
      .where('id', req.params.id)
      .del()
      .then(() => {
        res.sendStatus(200);
      })
      .catch(err => console.log(err));
  }
}
