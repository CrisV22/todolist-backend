const {getRequest, postRequest, deleteRequest} = require('../helpers/request');
const assert = require('assert');

describe('Todo CRUD functional test', () => {
    let res;
    const path = '/todos';

    it('Shall registrate a new todo for a shopping list', async () => {
        let data = { title: 'Coffee' };
        
        res = await getRequest(path);
        const numBeforePost = res.length;
        const expectedNumAfterPost = numBeforePost + 1;
        console.info('Response before POST:', numBeforePost);

        await postRequest(path, data);

        res = await getRequest(path);
        console.info('Response after POST:', res.length);
        
        const numTodos = res.length;
        console.info('Number of todos after POST:', numTodos);
        assert.strictEqual(numTodos, expectedNumAfterPost, new TypeError(`Expected ${expectedNumAfterPost} todos after creation, but got ${res.length}`));
    });

    it('Shall remove a wrong todo in a shopping list', async () => {
        res = await getRequest(path);
        if (!res || res.length === 0) throw new Error("No todos found to delete");
        
        const numBeforeDelete = res.length;
        const expectedNumAfterDelete = numBeforeDelete - 1;
        console.info('Response before DELETE:', numBeforeDelete);
        
        const todoId = res[0].id;

        await deleteRequest(`${path}/${todoId}`);

        res = await getRequest(path);
        console.info('Response after DELETE:', res.length);
        
        const numTodos = res.length;
        console.info('Number of todos after DELETE:', numTodos);
        assert.strictEqual(numTodos, expectedNumAfterDelete, new TypeError(`Expected ${expectedNumAfterDelete} todos after creation, but got ${res.length}`));
    });
})