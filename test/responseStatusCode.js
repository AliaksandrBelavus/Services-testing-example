const chai = require('chai');
const expect = chai.expect;
const sendRequest = require('../lib/sendRequest');

describe('Verify an http status code', () => {
    let response;
    before(async () => {
        response = await sendRequest();
    });
    
    it('Validation: status code of the obtained response is 200 OK', () => {
        expect(response.status).to.equal(200);
    });

});