// Importo Supertest para simular peticiones HTTP a mi API
import request from 'supertest';

// Importo la aplicación de Express
import app from '../../src/app.js';

// Importo assert para validar los resultados
import { strict as assert } from 'assert';

// Agrupo las pruebas del endpoint POST /api/adoptions/:uid/:pid
describe('POST /api/adoptions/:uid/:pid', () => {

  // Este test verifica que el endpoint valide correctamente
  // los datos antes de crear una adopción
  it('debe manejar errores de validación correctamente', async () => {

    // Intento crear una adopción usando un usuario y una mascota
    // que no existen en la base de datos
    const response = await request(app)
      .post('/api/adoptions/123456789123456789123456/123456789123456789123456');

    // Verifico que la respuesta sea un error controlado:
    // 400 (datos inválidos) o 404 (no encontrado)
    assert.ok(response.statusCode === 400 || response.statusCode === 404);
  });
});