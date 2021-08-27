const request = require('supertest')

const app = require('../app')
const api = request(app)

describe('GET /news', () => {
    test('respond with 200 code when it returns a json containing a list of all news', async () => {
        await api
            .get('/news')
            .then((response) => {
                expect(response.statusCode).toBe(200);
                expect(response.type).toBe('application/json');
            })
    })
})

describe('GET /news/:id', () => {
    test('respond with 200 code when it returns a json containing a single new', async () => {
        await api
            .get('/news/1')
            .then((response) => {
                expect(response.statusCode).toBe(200);
                expect(response.type).toBe('application/json');
            })
    })

    test('respond with 500 code when the new is non-existent', async () => {
        await api
            .get('/news/noexists')
            .then((response) => {
                expect(response.statusCode).toBe(500);
            })
    })
})

describe('POST /news', () => {
    test('respond with 200 when the new is created', async () => {
        const data ={
            name:"New",
            content:"contentNew",
            image: "imageNew",
            categoryId: 1
        }
        await api
            .post('/news')
            .send(data)
            .then((response) => {
                expect(response.statusCode).toBe(200);
                expect(response.type).toBe('application/json');
            })
    })

    test('respond with 400 when the new cannot be created because it does not meet field validation in category', async () => {
        const data ={
            name:"New",
            content:"contentNew",
            image: "imageNew"
        }
        await api
            .post('/news')
            .send(data)
            .then((response) => {
                expect(response.statusCode).toBe(400);
                expect(response.type).toBe('application/json');
            })
    })

    test('respond with 400 when the new cannot be created because it does not meet field validation in image', async () => {
        const data ={
            name:"New",
            content:"contentNew",
            categoryId: 1
        }
        await api
            .post('/news')
            .send(data)
            .then((response) => {
                expect(response.statusCode).toBe(400);
                expect(response.type).toBe('application/json');
            })
    })

    test('respond with 400 when the new cannot be created because it does not meet field validation in content', async () => {
        const data ={
            name:"New",
            categoryId: 1,
            image: "imageNew"
        }
        await api
            .post('/news')
            .send(data)
            .then((response) => {
                expect(response.statusCode).toBe(400);
                expect(response.type).toBe('application/json');
            })
    })

    test('respond with 400 when the new cannot be created because it does not meet field validation in name', async () => {
        const data ={
            content:"contentNew",
            categoryId: 1,
            image: "imageNew"
        }
        await api
            .post('/news')
            .send(data)
            .then((response) => {
                expect(response.statusCode).toBe(400);
                expect(response.type).toBe('application/json');
            })
    })

    test('respond with 400 when the new cannot be created because the data object is empty', async () => {
        const data ={}

        await api
            .post('/news')
            .send(data)
            .then((response) => {
                expect(response.statusCode).toBe(400);
                expect(response.type).toBe('application/json');
            })
    })
})

describe('PATCH /news/:id', () => {
    test('respond with 200 code when the new is successfully modified', async () => {
        const data ={
            name:"newUpdated",
            content:"contentNewUpdated",
            image:"imageNewUpdated",
        }
        await api
            .patch('/news/2')
            .send(data)
            .then((response) => {
                expect(response.statusCode).toBe(200);
                expect(response.type).toBe('application/json');
            })
    })

    test('respond with 404 code when the new is non-existent', async () => {
        const data ={
            name:"newUpdated",
            content:"contentNewUpdated",
            image:"imageNewUpdated",
        }
        await api
            .patch('/news/noexists')
            .send(data)
            .then((response) => {
                expect(response.statusCode).toBe(404);
            })
    })
})

describe('DELETE /news/:id', () => {
    test('respond with 200 when the new is deleted', async () => {
        await api
            .delete('/news/6')
            .then((response) => {
                expect(response.statusCode).toBe(200);
                expect(response.type).toBe('application/json');
            })
    })

    test('respond with 404 code when the new is non-existent', async () => {
        await api
            .delete('/news/noexists')
            .then((response) => {
                expect(response.statusCode).toBe(404);
            })
    })
})