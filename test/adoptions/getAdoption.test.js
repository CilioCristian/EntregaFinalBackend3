
// Importo la aplicación de Express
import app from '../../src/app.js';

// Importo assert para validar los resultados
import { strict as assert } from 'assert';

// Agrupo las pruebas del endpoint GET /api/adoptions/:aid
describe('GET /api/adoptions/:aid', () => {

  // Este test verifica que, si la adopción no existe,
  // el endpoint responda de manera controlada
  // y no genere un error interno del servidor
  it('debe manejar correctamente una adopción inexistente', async () => {

    // Hago la petición con un ID válido para MongoDB,
    // pero que no corresponde a ningún registro real
    const response = await request(app)
      .get('/api/adoptions/123456789123456789123456');

    // Verifico que la respuesta NO sea un error 500
    // (es decir, que la aplicación no se rompa)
    assert.notEqual(response.statusCode, 500);
  });
});