require('dotenv').config('../../.env');
const API_URL = require('./helpers/routing-helper').getAPIPath;
import mocks from './mocks';
const request = require('supertest')(API_URL);
import nock from 'nock'
const expect = require('chai').expect;


describe('Creating, Reading, Updating, and Deleting Users', function () {
  it('creates a user from a valid post', function (done) {
    const aUser = mocks.users.createUser();
    nock(API_URL)
      .post('/user/create')
      .reply(201, aUser);
    request
      .post('/user/create')
      .send({first_name: aUser.first_name, last_name: aUser.last_name, email: aUser.email})
      .expect(201)
      .set('Accept', 'application/json')
      .end(function (err, res) {
        expect(res.body.id).to.equal(aUser.id);
        done();
      })
  });

  it('lists all users', function (done) {
    const mockUsers = mocks.users.listUsers();
    nock(API_URL)
      .get('/users')
      .reply(200, mockUsers.users);
    request
      .get('/users')
      .expect(200)
      .set('Accept', 'application/json')
      .end(function (err, res) {
        expect(res.body[0].id).to.equal(mockUsers.users[0].id);
        done();
      })
  });

  it('retrieves a single user', function (done) {
    const aUser = mocks.users.retrieveUser();
    nock(API_URL)
      .get('/user/1')
      .reply(200, aUser);
    request
      .get('/user/1')
      .expect(200)
      .set('Accept', 'application/json')
      .end(function (err, res) {
        expect(res.body.first_name).to.equal(aUser.first_name);
        done();
      })
  });

  it('updates a single user', function (done) {
    const aUser = mocks.users.updateUser();
    nock(API_URL)
      .put('/user/1')
      .reply(200, aUser);
    request
      .put('/user/1')
      .send({first_name: aUser.first_name})
      .expect(200)
      .set('Accept', 'application/json')
      .end(function (err, res) {
        expect(res.body.first_name).to.equal(aUser.first_name);
        done();
      })
  });

  it('deletes a single user', function (done) {
    nock(API_URL)
      .delete('/user/1')
      .reply(204);
    request
      .delete('/user/1')
      .send({id: 1})
      .expect(204)
      .end(function(){
        done();
      })
  });
});
