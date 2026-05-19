import request from 'supertest';
import app from '../../src/app.js';
import { strict as assert } from 'assert';

describe('POST /api/adoptions/:uid/:pid', () => {
  it('debe manejar errores de validación correctamente', async () => {
    const response = await request(app)
      .post('/api/adoptions/123456789123456789123456/123456789123456789123456');

    assert.ok(response.statusCode === 400 || response.statusCode === 404);
  });
});