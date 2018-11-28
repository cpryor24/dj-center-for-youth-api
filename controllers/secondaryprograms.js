const knex = require("../db/knex.js");

module.exports = {
  index: (req, res) => {
    knex('secondaryPrograms')
      .then(results => {
        res.json(results);
      })
  },
  show: (req, res) => {
    knex('secondaryPrograms')
      .where('id', req.params.id)
      .then(result => {
        res.json(result[0]);
      })
      .catch(err => console.log(err));
  },
  create: (req, res) => {
    let { title, description, grantor_id, program_id } = req.body;
    knex('secondaryPrograms')
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
    knex('secondaryPrograms')
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
    knex('secondaryPrograms')
      .where('id', req.params.id)
      .del()
      .then(() => {
        res.sendStatus(200);
      })
      .catch(err => console.log(err));
  }
}
