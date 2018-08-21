require('dotenv').config('../../.env');
const API_URL = require('./helpers/routing-helper').getAPIPath;
import mocks from './mocks';
const request = require('supertest')(API_URL);
import nock from 'nock'
const expect = require('chai').expect;


describe('Creating, Reading, Updating, and Deleting Notebooks', function () {
  it('creates a notebook from a valid post', function (done) {
    const aNotebook = mocks.notebooks.createNotebook();
    nock(API_URL)
      .post('/notebook/create')
      .reply(201, aNotebook);
    request
      .post('/notebook/create')
      .send({title: aNotebook.title, userId: aNotebook.userId})
      .expect(201)
      .set('Accept', 'application/json')
      .end(function (err, res) {
        expect(res.body.title).to.equal(aNotebook.title);
        done();
      })
  });

  it('lists all notebooks', function (done) {
    const mockNotebooks = mocks.notebooks.listNotebooks();
    nock(API_URL)
      .get('/notebooks')
      .reply(200, mockNotebooks.notebooks);
    request
      .get('/notebooks')
      .expect(200)
      .set('Accept', 'application/json')
      .end(function (err, res) {
        expect(res.body[0].id).to.equal(mockNotebooks.notebooks[0].id);
        done();
      })
  });

  it('retrieves a single notebook', function (done) {
    const aNotebook = mocks.notebooks.retrieveNotebook();
    nock(API_URL)
      .get('/notebook/1')
      .reply(200, aNotebook);
    request
      .get('/notebook/1')
      .expect(200)
      .set('Accept', 'application/json')
      .end(function (err, res) {
        expect(res.body.title).to.equal(aNotebook.title);
        done();
      })
  });

  it('updates a single notebook', function (done) {
    const aNotebook = mocks.notebooks.updateNotebook();
    nock(API_URL)
      .put('/notebook/1')
      .reply(200, aNotebook);
    request
      .put('/notebook/1')
      .send({title: mocks.notebooks.updateNotebook.title})
      .expect(200)
      .set('Accept', 'application/json')
      .end(function (err, res) {
        expect(res.body.title).to.equal(aNotebook.title);
        done();
      })
  });

  it('deletes a single notebook', function (done) {
    nock(API_URL)
      .delete('/notebook/1')
      .reply(204);
    request
      .delete('/notebook/1')
      .send({id: 1})
      .expect(204)
      .end(function(){
        done();
      })
  });

  it('sends the content of a notebook from its corresponding tag', function(done){
    const aNotebook = mocks.notebooks.whatIsInsideNotebook();
    const aTag = mocks.tags.createTag();
    nock(API_URL)
      .post('/notebook/inside-my-notebook')
      .reply(201, aNotebook);
    request
      .post('/notebook/inside-my-notebook')
      .send({uuid: aTag.uuid, url: aTag.url })
      .expect(201)
      .set('Accept', 'application/json')
      .end(function (err, res) {
        expect(res.body.title).to.equal(aNotebook.title);
        done();
      })
  });

});
