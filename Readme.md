# Backend III - Entrega Final

Proyecto final de la materia Backend III.

## 📌 Descripción

Este proyecto implementa:

- Tests funcionales sobre todos los endpoints del router `adoption.router.js`.
- Dockerización completa de la aplicación.
- Publicación de la imagen en DockerHub.
- Documentación del proyecto mediante README.

---

## 🧪 Tests funcionales

Se desarrollaron pruebas para los siguientes endpoints:

- `GET /api/adoptions`
- `GET /api/adoptions/:aid`
- `POST /api/adoptions/:uid/:pid`

Los tests validan:

- Obtención correcta de todas las adopciones.
- Manejo de errores cuando se consulta una adopción inexistente.
- Validaciones al intentar crear una adopción.

### Ejecutar los tests

```bash
npm test