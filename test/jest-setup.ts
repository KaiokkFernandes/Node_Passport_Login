import supertest from 'supertest';
import { SetupServer } from './serve';
import { beforeAll } from '@jest/globals';


beforeAll(() => {
    const server = new SetupServer();
    server.init();
    global.testRequest = supertest(server.getApp());    
});



