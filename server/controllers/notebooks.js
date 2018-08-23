const Notebook = require("../models").Notebook;
const Tag = require("../models").Tag;
const Page = require("../models").Page;
const PageItem = require("../models").PageItem;
const User = require("../models").User;

module.exports = {
  create(req, res) {
    return Notebook
      .create({
        title: req.body.title,
        userId: req.body.userId
      })
      .then(notebook => res.status(201).send(notebook))
      .catch(error => res.status(400).send(error))
  },
  list(req, res) {
    return Notebook
      .all()
      .then(notebook => res.status(200).send(notebook))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return Notebook
      .findById(req.params.id)
      .then(notebook => {
        if (!notebook) {
          return res.status(404).send({
            message: 'Notebook Not Found',
          });
        }
        return res.status(200).send(notebook);
      })
      .catch(error => res.status(400).send(error));
  },
  update(req, res) {
    return Notebook
      .findById(req.params.id)
      .then(notebook => {
        if (!notebook) {
          return res.status(404).send({
            message: 'Notebook Not Found',
          });
        }
        return notebook
          .update({
            title: req.body.title || notebook.title,
            userId: req.body.userId || notebook.userId
          })
          .then(() => res.status(200).send(notebook))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
  destroy(req, res) {
    return Notebook
      .findById(req.params.id)
      .then(notebook => {
        if (!notebook) {
          return res.status(400).send({
            message: 'Notebook Not Found',
          });
        }
        return notebook
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
  whatIsInsideNotebook(req, res) {
    return Tag
      .findAll({
        where: {
          uri: req.body.uri
        }
      })
      .then(tag => {
        if (!tag) {
          return res.status(404).send({
            message: 'No matching tag'
          })
        } else {
          return Notebook
            .findById(tag[0].dataValues.notebookId, {
              include: [
                {
                  model: Page,
                  as: 'pages',
                  include: [{
                    model: PageItem,
                    as: 'pageItems'
                  }]
                },
                {
                  model: User,
                  as: 'owner'
                }
              ]
            })
            .then(notebook => {
              if (!notebook) {
                return res.status(404).send({
                  message: 'No matching notebook'
                })
              } else {
                return res.status(200).send(notebook);
              }
            })
        }
      })
    },
};
