const request = require('supertest');
const server = require('../server.js');

beforeAll(async () => {
    console.log('Jest starting!');
});


afterAll(() => {
    server.close();
    console.log('server closed!');
});

describe('test add to cart route', () => {
    test('route /add-item', async () => {
        const response = await request(server).get('/add');
        expect(response.status).toEqual(200);
    });
});
