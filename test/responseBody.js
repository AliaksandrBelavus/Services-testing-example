const chai = require('chai');
const expect = chai.expect;
const sendRequest = require('../lib/sendRequest');

describe('Verify an http response body', () => {
    let response;
    before(async () => {
        response = await sendRequest();
    });
    
    it('Validation: the content of the response body is the array of 10 users', () => {
        expect(response.data).to.have.lengthOf(10);
    });
});