const PageItem = require("../models").PageItem;

module.exports = {
  create( req, res ){
    return PageItem
      .create({
        body: req.body.body,
        image: req.body.image,
        pageId: req.body.pageId
      })
      .then(pageItem => res.status(201).send(pageItem))
      .catch(error => res.status(400).send(error))
  },
  list(req, res) {
    return PageItem
      .all()
      .then(pageItem => res.status(200).send(pageItem))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return PageItem
      .findById(req.params.id)
      .then(pageItem => {
        if (!pageItem) {
          return res.status(404).send({
            message: 'PageItem Not Found',
          });
        }
        return res.status(200).send(pageItem);
      })
      .catch(error => res.status(400).send(error));
  },
  update(req, res) {
    return PageItem
      .findById(req.params.id)
      .then(pageItem => {
        if (!pageItem) {
          return res.status(404).send({
            message: 'PageItem Not Found',
          });
        }
        return pageItem
          .update({
            body: req.body.body || pageItem.body,
            image: req.body.image || pageItem.image,
            pageId: req.body.pageId || pageItem.pageId
          })
          .then(() => res.status(200).send(pageItem))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
  destroy(req, res) {
    return PageItem
      .findById(req.params.id)
      .then(pageItem => {
        if (!pageItem) {
          return res.status(400).send({
            message: 'PageItem Not Found',
          });
        }
        return pageItem
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};
