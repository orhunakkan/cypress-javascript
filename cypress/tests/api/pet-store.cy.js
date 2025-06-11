import { generatePetPayload, getHeaders } from '../../utilities/requestPayloads';
import { retryRequest } from '../../utilities/globalRetry';

describe('Pet Store API - Full CRUD Flow', () => {

    const BASE_URL = 'https://petstore.swagger.io/v2';
    let pet;

    before(() => {
        pet = generatePetPayload();
    });

    it('should create a new pet', () => {
        cy.request({
            method: 'POST',
            url: `${BASE_URL}/pet`,
            body: pet,
            headers: getHeaders(),
            failOnStatusCode: true
        }).then(response => {
            expect(response.status).to.equal(200);
            expect(response.body.id).to.equal(pet.id);
            expect(response.body.name).to.equal(pet.name);
            expect(response.body.status).to.equal(pet.status);
            expect(response.body.category).to.deep.equal(pet.category);
            expect(response.body.photoUrls).to.deep.equal(pet.photoUrls);
            expect(response.body.tags).to.deep.equal(pet.tags);
        });
    });

    it('should retrieve the created pet', () => {
        retryRequest(
            {
                method: 'GET',
                url: `${BASE_URL}/pet/${pet.id}`,
                failOnStatusCode: false
            },
            (response) => {
                expect(response.status).to.equal(200);
                expect(response.body.id).to.equal(pet.id);
                expect(response.body.name).to.equal(pet.name);
                expect(response.body.status).to.equal(pet.status);
                expect(response.body.category.id).to.equal(pet.category.id);
                expect(response.body.category.name).to.equal(pet.category.name);
                expect(response.body.photoUrls).to.deep.equal(pet.photoUrls);
                expect(response.body.tags.length).to.equal(pet.tags.length);
                expect(response.body.tags[0].id).to.equal(pet.tags[0].id);
                expect(response.body.tags[0].name).to.equal(pet.tags[0].name);
            }
        );
    });

    it('should update the pet', () => {
        pet.name = 'UpdatedPetName';
        pet.status = 'sold';

        cy.request({
            method: 'PUT',
            url: `${BASE_URL}/pet`,
            body: pet,
            headers: getHeaders(),
            failOnStatusCode: true
        }).then(response => {
            expect(response.status).to.equal(200);
            expect(response.body.name).to.equal(pet.name);
            expect(response.body.status).to.equal(pet.status);
        });
    });

    it('should retrieve the updated pet', () => {
        retryRequest(
            {
                method: 'GET',
                url: `${BASE_URL}/pet/${pet.id}`,
                failOnStatusCode: false
            },
            (response) => {
                expect(response.status).to.equal(200);
                expect(response.body.name).to.equal('UpdatedPetName');
                expect(response.body.status).to.equal('sold');
            }
        );
    });

    it('should delete the pet', () => {
        cy.request({
            method: 'DELETE',
            url: `${BASE_URL}/pet/${pet.id}`,
            failOnStatusCode: true
        }).then(response => {
            expect(response.status).to.equal(200);
        });
    });

    it('should return 404 when retrieving deleted pet', () => {
        retryRequest(
            {
                method: 'GET',
                url: `${BASE_URL}/pet/${pet.id}`,
                failOnStatusCode: false
            },
            (response) => {
                expect(response.status).to.equal(404);
            }
        );
    });
});
