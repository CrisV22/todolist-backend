const request = require('supertest')
const app = require('../../src/app') // Express

describe('Todo registration', () => {
  it('Deve retornar "listening"', async () => {
    const res = await request(app).get('/')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toEqual('listening')
  })

//   it('Deve retornar lista de tarefas cadastradas', async () => {
//     const res = await request(app).get('/todos')
//     expect(res.statusCode).toEqual(200)
//     expect(res.body).toEqual([])
//   })

//   it('Deve cadastrar uma tarefa', async () => {
//     const res = await request(app).post('/todos').send({
//       title: 'Teste'
//     })
//     expect(res.statusCode).toEqual(201)
//     expect(res.body).toHaveProperty('id')
//     expect(res.body).toHaveProperty('title', 'Teste')
//     expect(res.body).toHaveProperty('created_at')
//     expect(res.headers['content-type']).toMatch(/json/)
//   })

//   it('Deve deletar uma tarefa', async () => {
//     const res = await request(app).delete('/todos/')
//     expect(res.statusCode).toEqual(201)
//     expect(res.body).toHaveProperty('id')
//     expect(res.body).toHaveProperty('title', 'Teste')
//     expect(res.body).toHaveProperty('created_at')
//     expect(res.headers['content-type']).toMatch(/json/)
//   })
})
