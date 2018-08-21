require('dotenv').config('../../.env');
const API_URL = require('./helpers/routing-helper').getAPIPath;
import mocks from './mocks';
const request = require('supertest')(API_URL);
import nock from 'nock'
const expect = require('chai').expect;


describe('Creating, Reading, Updating, and Deleting Tags', function () {
  it('creates a tag from a valid post', function (done) {
    let aTag = mocks.tags.createTag();
    nock(API_URL)
      .post('/tag/create')
      .reply(201, aTag);
    request
      .post('/tag/create')
      .send({uuid: aTag.uuid, uri: aTag.uri, notebookId: aTag.notebookId})
      .expect(201)
      .set('Accept', 'application/json')
      .end(function (err, res) {
        expect(res.body.id).to.equal(aTag.id);
        done();
      })
  });

  it('lists all tags', function (done) {
    let tags = mocks.tags.listTags();
    nock(API_URL)
      .get('/tags')
      .reply(200, tags.tags);
    request
      .get('/tags')
      .expect(200)
      .set('Accept', 'application/json')
      .end(function (err, res) {
        expect(res.body[0].uuid).to.equal(tags.tags[0].uuid);
        done();
      })
  });

  it('retrieves a single tag', function (done) {
    let aTag = mocks.tags.retrieveTag();
    nock(API_URL)
      .get('/tag/1')
      .reply(200, aTag);
    request
      .get('/tag/1')
      .expect(200)
      .set('Accept', 'application/json')
      .end(function (err, res) {
        expect(res.body.uuid).to.equal(aTag.uuid);
        done();
      })
  });

  it('updates a single tag', function (done) {
    let aTag = mocks.tags.updateTag();
    nock(API_URL)
      .put('/tag/1')
      .reply(200, aTag);
    request
      .put('/tag/1')
      .send({uuid: aTag.uuid})
      .expect(200)
      .set('Accept', 'application/json')
      .end(function (err, res) {
        expect(res.body.uuid).to.equal(aTag.uuid);
        done();
      })
  });

  it('deletes a single tag', function (done) {
    nock(API_URL)
      .delete('/tag/1')
      .reply(204);
    request
      .delete('/tag/1')
      .send({id: 1})
      .expect(204)
      .end(function(){
        done();
      })
  });
});
