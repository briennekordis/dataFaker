const supertest = require('supertest');
const app = require('./http_server');
const request = supertest(app);

if('Testing test!', async done => {
    expect(1).toBe(1);
    done();
});

var server = app.listen(3000, function(){
    console.log('Running on port 3000');
});

afterAll(done => {
    server.close();
    done();
});
