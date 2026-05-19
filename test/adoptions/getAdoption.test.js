import request from 'supertest';
import app from '../../src/app.js';
import { strict as assert } from 'assert';

describe('GET /api/adoptions/:aid', () => {
  it('debe manejar correctamente una adopción inexistente', async () => {
    const response = await request(app)
      .get('/api/adoptions/123456789123456789123456');

    assert.notEqual(response.statusCode, 500);
  });
});