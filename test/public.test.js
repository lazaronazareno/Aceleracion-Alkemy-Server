const { TestWatcher } = require('jest');
const request = require('supertest')

const app = require('../app')
const api = request(app)

let token;

beforeAll( async() => {
  await api
    .post('/auth/login')
    .send({
      email: 'frederic@example.com',
      password: '1234',
    })
    .then((response) =>{
      token = response.body.token
      console.log(token)
    });
})

describe ('GET /organization/public', () => {
  test ('respond with a 200 code when it returns a json containing an object with data for the organization with name="Somos Mas"',async()=>{
    await api 
    .get('/organization/public')
    .then((response) => {
      expect(response.statusCode).toBe(200);
      expect(response.type).toBe('application/json');
    })
  })
})

describe('POST /organization/public', () => {
  test('respond with 200 when the object for the organization public data is created', async () => {
    const data = {
      name: "ONG",
      image: "new image",
      address:"new address"
    };

    await api
      .post('/organization/public')
      .set('Authorization', `Bearer ${token}`)
      .send(data)
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.type).toBe('application/json');
      })
  })

  test('respond with 401 code when the user is not authorized to post', async () => {
    const data = {
      name: "ONG",
      image: "new image",
      address:"new address"
    };

    await api
      .post('/organization/public')
      .send(data)
      .then((response) =>{
        expect(response.statusCode).toBe(401);
      })  
  })
 
  test('respond with 400 when the object cannot be created because it does not meet the field validation', async () => {
    const data = {};
    await api
      .post('/organization/public')
      .set('Authorization', `Bearer ${token}`)
      .send(data)
      .then((response) =>{
        expect(response.statusCode).toBe(400)
        expect(response.type).toBe('application/json');
      })
  })
  
  describe('DELETE /organization/public', () => {
    test('respond with 200 when the object is succesfully deleted', async () => {
      await api
        .delete('/organization/public/17')
        .set('Authorization', `Bearer ${token}`)
        .then((response) =>{
          expect(response.statusCode).toBe(200)
          expect(response.type).toBe('application/json');
        })
    })
  
    test('respond with 401 when the user is not authorized to delete objects', async () => {
      await api
        .delete('/organization/public/17')
        .then((response) =>{
          expect(response.statusCode).toBe(401)
        })
    })
  
    test('respond with a 404 code when the object is non-existent', async () => {
      await api
        .delete('/organization/public/noexist')
        .set('Authorization', `Bearer ${token}`)
        .then((response) =>{
          expect(response.statusCode).toBe(404)
        })
    })
  
  })

})