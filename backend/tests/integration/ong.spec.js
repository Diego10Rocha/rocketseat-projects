const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection')

describe('ONG', ()=>{

    beforeEach(async ()=>{
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async ()=>{
        await connection.destroy();
    });

    it('sholde be able to create a new ONG', async()=>{
        const response = await request(app)
        .post('/ongs')
        .send({
            name: "APAD",
            email: "email@email.com",
            whatsapp: "7627828254",
            city: "Rio do Sul",
            uf: "SC"
        });
        
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    })
})

describe('Profile', ()=>{

    beforeEach(async ()=>{
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async ()=>{
        await connection.destroy();
    });

    it('sholde be able to create a new ONG', async()=>{
        const response = await request(app)
        .post('/ongs')
        .set('authorization')
        .send({
            name: "APAD",
            email: "email@email.com",
            whatsapp: "7627828254",
            city: "Rio do Sul",
            uf: "SC"
        });
        
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    })

})