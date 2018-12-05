const tape = require("tape");
const supertest = require('supertest');
const qs = require('querystring')

const router = require('../src/router');
const runDbBuild = require("../database/db_build");
const getData = require("../queries/getData");
const postData = require("../queries/setData");
const songs =[
  {img_url: "https://gdb.radiosawa.us/BB648761-0DAC-4B01-B4E0-0BB8AB0330BE_cx0_cy4_cw0_w1023_r1_s.jpg",
   link: "https://www.youtube.com/watch?v=vEfW9sm70tg",
   name: "شيرين",
   title: "مشاعر" } ];
// Test file
tape("Tape is working", t => {
  t.equals(1, 1, "Testing Work ^_^ ");
  t.end();
});

//Test Status
tape('Check status code is 200', (t) => {
  supertest(router)
    .get("/")
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      t.error(err)
      t.equal(res.statusCode,200, 'response should be 200');
      t.deepEqual(res.headers['content-type'], 'text/html' , 'response should be htmlFile');
      t.end();
    });
});
// test Staus 404 status
tape('Check status code is 404', (t) => {
  supertest(router)
    .get('/pageNotFound')
    .expect(404)
    .end((err, res) => {
      t.error(err)
      t.equal(res.statusCode, 404 , 'response should be 404');
      t.end();
    });
});
// Test Get result
tape('Test Result', (t) => {
  const urlQuery = `/search?${qs.stringify({category:'song', text:'مشاعر'})}`
  supertest(router)
    .post(urlQuery)
    .expect(200)
    .expect('Content-Type','application/json')
    .end((err, res) => {
      t.error(err)
      t.deepEqual(JSON.parse(res.text),songs, 'The result should be Songs Info ');
      t.end();
    });
});
