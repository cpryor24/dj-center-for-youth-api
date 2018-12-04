const knex = require("../db/knex.js");

module.exports = {
  index: (req, res) => {
    knex('serviceLearning')
      .then(results => {
        res.json(results);
      })
  },
  show: (req, res) => {
    knex('serviceLearning')
      .where('id', req.params.id)
      .then(result => {
        res.json(result[0]);
      })
      .catch(err => console.log(err));
  },
  create: (req, res) => {
    let { title, description, grantor_id, program_id } = req.body;
    knex('serviceLearning')
      .insert({
        title,
        description,
        grantor_id,
        program_id
      })
      .then(() => {
        res.sendStatus(200);
      })
      .catch(err => console.log(err));
  },
  update: (req, res) => {
    let { title, description, grantor_id, program_id} = req.body;
    knex('serviceLearning')
      .where('id', req.params.id)
      .update({
        title,
        description,
        grantor_id,
        program_id
      })
      .then(() => {
        res.sendStatus(200);
      })
      .catch(err => console.log(err));
  },
  delete: (req, res) => {
    knex('serviceLearning')
      .where('id', req.params.id)
      .del()
      .then(() => {
        res.sendStatus(200);
      })
      .catch(err => console.log(err));
  }
}
