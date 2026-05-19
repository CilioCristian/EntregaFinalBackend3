import request from 'supertest';
import app from '../../src/app.js';
import { strict as assert } from 'assert';

describe('GET /api/adoptions', () => {
  it('debe obtener todas las adopciones', async () => {
    const response = await request(app)
      .get('/api/adoptions');

    assert.equal(response.statusCode, 200);
    assert.equal(response.body.status, 'success');
    assert.ok(response.body.payload);
  });
});