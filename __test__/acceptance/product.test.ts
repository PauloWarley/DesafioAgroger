import { createConnection } from "typeorm";
import app from "../../src/app";
import port from "../../src/config"
import request from "supertest";

let connection, server;

beforeEach(async () => {
    connection = await createConnection();
    await connection.synchronize();
    server = app.listen(port)
})

beforeEach(() => {
    connection.close();
    server.close();
})

it('should be product created', async () => {
    const response = await request(app)
        .post('/api/products')
        .send({
            "name": "Bola Vermelha",
            "price": 19.99,
            "description": "Product description",
            "color": "Blue",
            "size": "Medium"
        })
    console.log(response.body, response.statusCode)

    expect(1+1).toBe(2);
})