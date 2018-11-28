const knex = require("../db/knex.js");

module.exports = {
  index: (req, res) => {
    knex('events')
      .then(results => {
        res.json(results);
      })
  },
  show: (req, res) => {
    knex('events')
      .where('id', req.params.id)
      .then(result => {
        res.json(result[0]);
      })
      .catch(err => console.log(err));
  },
  create: (req, res) => {
    let { title, description, img_url, date, time, venue, address, isActive } = req.body;
    knex('events')
      .insert({
        title,
        description,
        img_url,
        date,
        time,
        venue,
        address,
        isActive
      })
      .then(() => {
        res.sendStatus(200);
      })
      .catch(err => console.log(err));
  },
  update: (req, res) => {
    let { title, description, img_url, date, time, venue, address, isActive} = req.body;
    knex('events')
      .where('id', req.params.id)
      .update({
        title,
        description,
        img_url,
        date,
        time,
        venue,
        address,
        isActive
      })
      .then(() => {
        res.sendStatus(200);
      })
      .catch(err => console.log(err));
  },
  delete: (req, res) => {
    knex('events')
      .where('id', req.params.id)
      .del()
      .then(() => {
        res.sendStatus(200);
      })
      .catch(err => console.log(err));
  }
}
