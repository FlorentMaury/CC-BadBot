// tests/server.test.js
const request = require('supertest');
const app = require('../server'); // Assurez-vous que votre serveur Express exporte l'application

describe('Test des routes du serveur', () => {
  it('GET / devrait retourner un statut 200', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain('Le serveur fonctionne !');
  });

  it('POST /ask sans question devrait retourner un statut 400', async () => {
    const res = await request(app).post('/ask').send({});
    expect(res.statusCode).toEqual(400);
  });

  // Ajoutez plus de tests selon vos besoins
});