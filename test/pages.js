require('dotenv').config('../../.env');
const API_URL = require('./helpers/routing-helper').getAPIPath;
import mocks from './mocks';
const request = require('supertest')(API_URL);
import nock from 'nock'
const expect = require('chai').expect;


describe('Creating, Reading, Updating, and Deleting Pages', function () {
  it('creates a page from a valid post', function (done) {
    const aPage = mocks.pages.createPage();
    nock(API_URL)
      .post('/page/create')
      .reply(201, aPage);
    request
      .post('/page/create')
      .send({number: aPage.number, notebookId: aPage.notebookId})
      .expect(201)
      .set('Accept', 'application/json')
      .end(function (err, res) {
        expect(res.body.notebookId).to.equal(aPage.notebookId);
        done();
      })
  });

  it('lists all pages', function (done) {
    const pages = mocks.pages.listPages();
    nock(API_URL)
      .get('/pages')
      .reply(200, pages.pages);
    request
      .get('/pages')
      .expect(200)
      .set('Accept', 'application/json')
      .end(function (err, res) {
        expect(res.body[0].number).to.equal(pages.pages[0].number);
        done();
      })
  });

  it('retrieves a single page', function (done) {
    const aPage = mocks.pages.retrievePage();
    nock(API_URL)
      .get('/page/1')
      .reply(200, aPage);
    request
      .get('/page/1')
      .expect(200)
      .set('Accept', 'application/json')
      .end(function (err, res) {
        expect(res.body.number).to.equal(aPage.number);
        done();
      })
  });

  it('updates a single page', function (done) {
    const aPage = mocks.pages.updatePage();
    nock(API_URL)
      .put('/page/1')
      .reply(200, aPage);
    request
      .put('/page/1')
      .send({number: aPage.number})
      .expect(200)
      .set('Accept', 'application/json')
      .end(function (err, res) {
        expect(res.body.number).to.equal(aPage.number);
        done();
      })
  });

  it('deletes a single page', function (done) {
    nock(API_URL)
      .delete('/page/1')
      .reply(204);
    request
      .delete('/page/1')
      .send({id: 1})
      .expect(204)
      .end(function(){
        done();
      })
  });
});
