const chai = require('chai');
const expect = chai.expect;
const sendRequest = require('../lib/sendRequest');

describe('Verify an http response header', () => {
    let response;
    before(async () => {
        response = await sendRequest();
    });
    
    it('Validation: the content-type header exists in the obtained response', () => {
        expect(response.headers).to.have.a.property('content-type');
    });

    it('Validation: the value of the content-type header is application/json; charset=utf-8', () => {
        expect(response.headers).to.include({'content-type': 'application/json; charset=utf-8'});
    });
});