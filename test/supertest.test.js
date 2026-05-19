import request from 'supertest';
import app from '../src/app.js';
import { strict as assert } from 'assert';

describe('Adoptions API Functional Tests', () => {

  // 🔥 GET ALL
  it('GET /api/adoptions debe obtener todas las adopciones', async () => {

    const response = await request(app)
      .get('/api/adoptions');

    assert.equal(response.statusCode, 200);
    assert.equal(response.body.status, 'success');
    assert.ok(response.body.payload);
  });
git 
  // 🔥 GET INVALID ID
  it('GET /api/adoptions/:id debe devolver error si no existe', async () => {

    const response = await request(app)
      .get('/api/adoptions/123456789123456789123456');

    assert.notEqual(response.statusCode, 500);
  });

  // 🔥 POST INVALID USER/PET
  it('POST /api/adoptions/:uid/:pid debe manejar errores correctamente', async () => {

    const response = await request(app)
      .post('/api/adoptions/123456789123456789123456/123456789123456789123456');

    assert.ok(response.statusCode === 400 || response.statusCode === 404);
  });

});