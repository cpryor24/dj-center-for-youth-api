const knex = require("../db/knex.js");

module.exports = {
  index: (req, res) => {
    knex('photos')
      .then(results => {
        res.json(results);
      })
  },
  show: (req, res) => {
    knex('photos')
      .where('id', req.params.id)
      .then(result => {
        res.json(result[0]);
      })
      .catch(err => console.log(err));
  },
  create: (req, res) => {
    let { img_url, secondaryProgram_id } = req.body;
    knex('photos')
      .insert({
        img_url,
        secondaryProgram_id
      })
      .then(() => {
        res.sendStatus(200);
      })
      .catch(err => console.log(err));
  },
  update: (req, res) => {
    let { img_url, secondaryProgram_id} = req.body;
    knex('photos')
      .where('id', req.params.id)
      .update({
        img_url,
        secondaryProgram_id
      })
      .then(() => {
        res.sendStatus(200);
      })
      .catch(err => console.log(err));
  },
  delete: (req, res) => {
    knex('photos')
      .where('id', req.params.id)
      .del()
      .then(() => {
        res.sendStatus(200);
      })
      .catch(err => console.log(err));
  }
}
