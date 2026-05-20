// Importo la función request de Supertest.
// Esta función me permite simular peticiones HTTP (GET, POST, etc.)
// a mi aplicación para poder probar los endpoints automáticamente.
import request from 'supertest';
// Importo la aplicación de Express que quiero testear
import app from '../../src/app.js';

// Importo assert para hacer las validaciones del test
import { strict as assert } from 'assert';

// Agrupo todas las pruebas relacionadas con el endpoint GET /api/adoptions
describe('GET /api/adoptions', () => {

  // Este test verifica que el endpoint devuelva correctamente
  // el listado de todas las adopciones
  it('debe obtener todas las adopciones', async () => {

    // Hago una petición GET al endpoint
    const response = await request(app)
      .get('/api/adoptions');

    // Verifico que la respuesta tenga código 200 (OK)
    assert.equal(response.statusCode, 200);

    // Verifico que la API responda con status "success"
    assert.equal(response.body.status, 'success');

    // Verifico que exista un payload con la información
    assert.ok(response.body.payload);
  });
});