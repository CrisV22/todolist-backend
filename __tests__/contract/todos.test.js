const {getTodosSchema, postTodoSchema, deleteTodoSchema} = require('../schemas');
const {getRequest, postRequest, deleteRequest} = require('../helpers/request');
const {validateSchema} = require('../helpers/schemaValidator');

describe('Todo CRUD contract test', () => {
    let res;
    const path = '/todos';

    it('POST response shall be according to the schema', async () => {
        let payload = { title: 'Test API' };
        res = await postRequest(path, payload);
        validateSchema(res, postTodoSchema);
    });

    it.only('GET response shall be according to the schema', async () => {
        res = await getRequest(path);
        validateSchema(res, getTodosSchema);
    });

    it('DELETE response shall be according to the schema', async () => {        
        if (!res || res.length === 0) throw new Error("No todos found to delete");
        
        const todoId = res[0].id;
        res = await deleteRequest(`${path}/${todoId}`);
        validateSchema(res, deleteTodoSchema);
    });
})