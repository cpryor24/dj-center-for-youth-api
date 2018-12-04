const knex = require("../db/knex.js");

module.exports = {
  index: (req, res) => {
    knex('youtube')
      .then(results => {
        res.json(results);
      })
  },
  show: (req, res) => {
    knex('youtube')
      .where('id', req.params.id)
      .then(result => {
        res.json(result[0]);
      })
      .catch(err => console.log(err));
  },
  create: (req, res) => {
    let { video_url } = req.body;
    knex('youtube')
      .insert({
        video_url
      })
      .then(() => {
        res.sendStatus(200);
      })
      .catch(err => console.log(err));
  },
  update: (req, res) => {
    let { video_url} = req.body;
    knex('youtube')
      .where('id', req.params.id)
      .update({
        video_url
      })
      .then(() => {
        res.sendStatus(200);
      })
      .catch(err => console.log(err));
  },
  delete: (req, res) => {
    knex('youtube')
      .where('id', req.params.id)
      .del()
      .then(() => {
        res.sendStatus(200);
      })
      .catch(err => console.log(err));
  }
}
