const request = require('supertest');
const app = require('../../src/app'); // Express

async function getRequest(path) {
    try {
        const res = await request(app)
        .get(path)
        .set('Accept', 'application/json')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200);
        return res.body;
    } catch (error) {
        console.error(`Error during GET request to ${path}:`, error);
        throw error;
    }
}

async function postRequest(path, data) {
    try {
        const res = await request(app)
        .post(path)
        .send(data)
        // .set('Accept', 'application/json')
        // .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(201);
        return res.body;
    } catch (error) {
        console.error(`Error during POST request to ${path}:`, error);
        throw error;
    }
}

async function deleteRequest(path) {
    try {
        const res = await request(app)
        .delete(path)
        .set('Accept', 'application/json')
        .expect(204);
        return res;
    } catch (error) {
        console.error(`Error during DELETE request to ${path}:`, error);
        throw error;
    }
}

module.exports = {
    getRequest,
    postRequest,
    deleteRequest
}
