const notebooksController = require('../controllers').notebooks;
const pageItemsController = require('../controllers').pageItems;
const pagesController = require('../controllers').pages;
const tagsController = require('../controllers').tags;
const usersController = require('../controllers').users;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message:'working'
  }));
  //Notebooks
  app.post('/api/notebook/create', notebooksController.create);
  app.get('/api/notebooks', notebooksController.list);
  app.get('/api/notebook/:id', notebooksController.retrieve);
  app.put('/api/notebook/:id', notebooksController.update);
  app.delete('/api/notebook/:id', notebooksController.destroy);
  app.post('/api/notebook/inside-my-notebook', notebooksController.whatIsInsideNotebook);
  //Page Items
  app.post('/api/page-item/create', pageItemsController.create);
  app.get('/api/page-items', pageItemsController.list);
  app.get('/api/page-item/:id', pageItemsController.retrieve);
  app.put('/api/page-item/:id', pageItemsController.update);
  app.delete('/api/page-item/:id', pageItemsController.destroy);
  // Pages
  app.post('/api/page/create', pagesController.create);
  app.get('/api/pages', pagesController.list);
  app.get('/api/page/:id', pagesController.retrieve);
  app.put('/api/page/:id', pagesController.update);
  app.delete('/api/page/:id', pagesController.destroy);
  //Tags
  app.post('/api/tag/create', tagsController.create);
  app.get('/api/tags', tagsController.list);
  app.get('/api/tag/:id', tagsController.retrieve);
  app.put('/api/tag/:id', tagsController.update);
  app.delete('/api/tag/:id', tagsController.destroy);
  //Users
  app.post('/api/user/create', usersController.create);
  app.get('/api/users', usersController.list);
  app.get('/api/user/:id', usersController.retrieve);
  app.put('/api/user/:id', usersController.update);
  app.delete('/api/user/:id', usersController.destroy);
};
