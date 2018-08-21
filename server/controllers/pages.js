const Page = require("../models").Page;

module.exports = {
  create( req, res ){
    return Page
      .create({
        number: req.body.number,
        notebookId: req.body.notebookId
      })
      .then(page => res.status(201).send(page))
      .catch(error => res.status(400).send(error))
  },
  list(req, res) {
    return Page
      .all()
      .then(page => res.status(200).send(page))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return Page
      .findById(req.params.id)
      .then(page => {
        if (!page) {
          return res.status(404).send({
            message: 'Page Not Found',
          });
        }
        return res.status(200).send(page);
      })
      .catch(error => res.status(400).send(error));
  },
  update(req, res) {
    return Page
      .findById(req.params.id)
      .then(page => {
        if (!page) {
          return res.status(404).send({
            message: 'Page Not Found',
          });
        }
        return page
          .update({
            number: req.body.number || page.number,
            notebookId: req.body.notebookId || page.notebookId,
          })
          .then(() => res.status(200).send(page))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
  destroy(req, res) {
    return Page
      .findById(req.params.id)
      .then(page => {
        if (!page) {
          return res.status(400).send({
            message: 'Page Not Found',
          });
        }
        return page
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};
