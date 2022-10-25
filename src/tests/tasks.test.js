import request from 'supertest';
import app from '../app';
import Tasks from '../models/Tasks';
import tasksSeed from '../seeds/tasks';

beforeAll(async () => {
  await Tasks.collection.insertMany(tasksSeed);
});

describe('GETBYID /api/tasks', () => {
  test('Existent ID response have to be 200', async () => {
    const response = await request(app).get('/api/tasks/63534ef4fc13ae1a7100001e').send();
    expect(response.status).toBe(200);
  });
  test('Existent ID error have to be false', async () => {
    const response = await request(app).get('/api/tasks/63534ef4fc13ae1a7100001e').send();
    expect(response.body.error).toBeFalsy();
  });
  test('Existent ID body data have to be defined, body defined', async () => {
    const response = await request(app).get('/api/tasks/63534ef4fc13ae1a7100001e').send();
    expect(response.body.data).toBeDefined();
    expect(response.body).toBeDefined();
  });
  test('Existent ID Is a json object?', async () => {
    const response = await request(app).get('/api/tasks/63534ef4fc13ae1a7100001e').send();
    expect(typeof response).toBe('object');
  });
  test('Non existent ID response have to be 404', async () => {
    const response = await request(app).get('/api/tasks/63534ef4fc13ae1a71000047').send();
    expect(response.status).toBe(404);
  });
  test('Non existent ID error have to be true', async () => {
    const response = await request(app).get('/api/tasks/63534ef4fc13ae1a71000047').send();
    expect(response.body.error).toBeTruthy();
  });
  test('Non existent ID response body data have to be Undefined, body defined', async () => {
    const response = await request(app).get('/api/tasks/63534ef4fc13ae1a71000047').send();
    expect(response.body.data).toBeUndefined();
    expect(response.body).toBeDefined();
  });
  test('Non valid id format response have to be 400', async () => {
    const response = await request(app).get('/api/tasks/63534ef4fc13ae1a71000').send();
    expect(response.status).toBe(400);
  });
  test('Non valid id format error have to be true', async () => {
    const response = await request(app).get('/api/tasks/63534ef4fc13ae1a71000').send();
    expect(response.body.error).toBeTruthy();
  });
  test('Non valid id format response body data have to be undefined, body defined', async () => {
    const response = await request(app).get('/api/tasks/63534ef4fc13ae1a71000').send();
    expect(response.body.data).toBeUndefined();
    expect(response.body).toBeDefined();
  });
});

describe('DELETE-BY-ID /api/tasks', () => {
  test('Existent ID response have to be 204', async () => {
    const response = await request(app).del('/api/tasks/63534ef4fc13ae1a7100001e').send();
    expect(response.status).toBe(204);
  });
  test('Existent ID body match object {}', async () => {
    const response = await request(app).del('/api/tasks/63534ef4fc13ae1a7100001e').send();
    expect(response.body).toMatchObject({});
  });
  test('Non existent ID response have to be 404', async () => {
    const response = await request(app).del('/api/tasks/63534ef4fc13ae1a71000047').send();
    expect(response.status).toBe(404);
  });
  test('Non existent ID error have to be true', async () => {
    const response = await request(app).del('/api/tasks/63534ef4fc13ae1a71000047').send();
    expect(response.body.error).toBeTruthy();
  });
  test('Non existent ID response body data have to be Undefined, body defined', async () => {
    const response = await request(app).del('/api/tasks/63534ef4fc13ae1a71000047').send();
    expect(response.body.data).toBeUndefined();
    expect(response.body).toBeDefined();
  });
  test('Non valid id format response have to be 400', async () => {
    const response = await request(app).del('/api/tasks/63534ef4fc13ae1a71000').send();
    expect(response.status).toBe(400);
  });
  test('Non valid id format error have to be true', async () => {
    const response = await request(app).del('/api/tasks/63534ef4fc13ae1a71000').send();
    expect(response.body.error).toBeTruthy();
  });
  test('Non valid id format response body data have to be undefined, body defined', async () => {
    const response = await request(app).del('/api/tasks/63534ef4fc13ae1a71000').send();
    expect(response.body.data).toBeUndefined();
    expect(response.body).toBeDefined();
  });
});
