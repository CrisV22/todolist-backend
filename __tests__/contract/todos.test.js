const {getTodosSchema, postTodoSchema, deleteTodoSchema} = require('../schemas');
const {getRequest, postRequest, deleteRequest} = require('../helpers/request');
const {validateSchema} = require('../helpers/schemaValidator');
const {todoData} = require('../data/data');
const request = require('supertest')
const app = require('../../src/app');

describe('Todo CRUD contract test', () => {
    let res;
    const path = '/todos';

    it('Deve retornar "listening"', async () => {
    const res = await request(app).get('/')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toEqual('listening')
  })

    it('POST response shall be according to the schema', async () => {
        let data = todoData();
        res = await postRequest(path, data);
        validateSchema(res, postTodoSchema);
    });

    // it('GET response shall be according to the schema', async () => {
    //     res = await getRequest(path);
    //     validateSchema(res, getTodosSchema);
    // });

    // it('DELETE response shall be according to the schema', async () => {        
    //     if (!res || res.length === 0) throw new Error("No todos found to delete");
        
    //     const todoId = res[0].id;
    //     res = await deleteRequest(`${path}/${todoId}`);
    //     validateSchema(res, deleteTodoSchema);
    // });
})