const request = require('supertest');
const express = require('express');
const fs = require('fs');
const yaml = require('js-yaml');
const path = require('path');

// Import the server app
const app = require('../server');

describe('GET /api/config', () => {
  it('should return LAN config as JSON', async () => {
    const response = await request(app).get('/api/config');
    expect(response.statusCode).toBe(200);
    expect(response.headers['content-type']).toMatch(/json/);
    expect(response.body).toHaveProperty('lan_server');
    expect(response.body).toHaveProperty('subsidiaries');
  });
});
