require('dotenv').config('../../.env');
const API_URL = require('./helpers/routing-helper').getAPIPath;
import mocks from './mocks';
const request = require('supertest')(API_URL);
import nock from 'nock'
const expect = require('chai').expect;


describe('Creating, Reading, Updating, and Deleting PageItems', function () {
  it('creates a pageItem from a valid post', function (done) {
    const aPageItem = mocks.pageItems.createPageItem();
    nock(API_URL)
      .post('/page-item/create')
      .reply(201, aPageItem);
    request
      .post('/page-item/create')
      .send({body: aPageItem.body, image: aPageItem.image, pageId: aPageItem.pageId})
      .expect(201)
      .set('Accept', 'application/json')
      .end(function (err, res) {
        expect(res.body.id).to.equal(aPageItem.id);
        done();
      })
  });

  it('lists all pageItems', function (done) {
    const mockPageItems = mocks.pageItems.listPageItems();
    nock(API_URL)
      .get('/page-items')
      .reply(200, mockPageItems.pageItems);
    request
      .get('/page-items')
      .expect(200)
      .set('Accept', 'application/json')
      .end(function (err, res) {
        expect(res.body[0].body).to.equal(mockPageItems.pageItems[0].body);
        done();
      })
  });

  it('retrieves a single pageItem', function (done) {
    const aPageItem = mocks.pageItems.retrievePageItem();
    nock(API_URL)
      .get('/page-item/1')
      .reply(200,aPageItem);
    request
      .get('/page-item/1')
      .expect(200)
      .set('Accept', 'application/json')
      .end(function (err, res) {
        expect(res.body.body).to.equal(aPageItem.body);
        done();
      })
  });

  it('updates a single pageItem', function (done) {
    const aPageItem = mocks.pageItems.updatePageItem();
    nock(API_URL)
      .put('/page-item/1')
      .reply(200, aPageItem);
    request
      .put('/page-item/1')
      .send({body: aPageItem.body})
      .expect(200)
      .set('Accept', 'application/json')
      .end(function (err, res) {
        expect(res.body.body).to.equal(aPageItem.body);
        done();
      })
  });

  it('deletes a single pageItem', function (done) {
    nock(API_URL)
      .delete('/page-item/1')
      .reply(204);
    request
      .delete('/page-item/1')
      .send({id: 1})
      .expect(204)
      .end(function(){
        done();
      })
  });
});
