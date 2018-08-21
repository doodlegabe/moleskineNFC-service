const Tag = require("../models").Tag;

module.exports = {
  create( req, res ){
    return Tag
      .create({
        uuid: req.body.uuid,
        uri: req.body.uri,
        notebookId: req.body.notebookId
      })
      .then(tag => res.status(201).send(tag))
      .catch(error => res.status(400).send(error))
  },
  list(req, res) {
    return Tag
      .all()
      .then(tag => res.status(200).send(tag))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return Tag
      .findById(req.params.id)
      .then(tag => {
        if (!tag) {
          return res.status(404).send({
            message: 'Tag Not Found',
          });
        }
        return res.status(200).send(tag);
      })
      .catch(error => res.status(400).send(error));
  },
  update(req, res) {
    return Tag
      .findById(req.params.id)
      .then(tag => {
        if (!tag) {
          return res.status(404).send({
            message: 'Tag Not Found',
          });
        }
        return tag
          .update({
            uuid: req.body.uuid || tag.uuid,
            uri: req.body.uri || tag.uri,
            notebookId: req.body.notebookId || tag.notebookId
          })
          .then(() => res.status(200).send(tag))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
  destroy(req, res) {
    return Tag
      .findById(req.params.id)
      .then(tag => {
        if (!tag) {
          return res.status(400).send({
            message: 'Tag Not Found',
          });
        }
        return tag
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};
