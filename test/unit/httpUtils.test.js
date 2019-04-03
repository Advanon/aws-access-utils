const {expect} = require('chai');
const httpUtils = require('../../src/httpUtils');

describe('httpUtils', () => {
    describe('CORS_HEADERS', () => {
        it('should export object', () => {
            expect(httpUtils.CORS_HEADERS).to.be.an('object');
        });
    });
    describe('createErrorResponse', () => {
        const status = 400;
        const error = Error('customMessage');
        error.name = 'CustomErrorName';
        const options = {cors: true};

        it('should export function', () => {
            expect(httpUtils.createErrorResponse).to.be.a('function');
        });
        describe('on no status code', () => {
            it('should throw exception', () => {
                expect(() => {
                    httpUtils.createErrorResponse()
                }).to.throw();
            });
        });
        describe('on no error', () => {
            it('should throw exception', () => {
                expect(() => {
                    httpUtils.createErrorResponse(status)
                }).to.throw();
            });
        });
        describe('on no options', () => {
            let result = null;

            beforeEach(() => {
                result = httpUtils.createErrorResponse(status, error);
            });

            it('should return statusCode', () => {
                expect(result.statusCode).to.eql(status);
            });
            it('should return error body', () => {
                expect(result.body).to.be.a('string');
            });
            it('should return error JSON body with parameters', () => {
                const resultJson = JSON.parse(result.body);
                expect(resultJson.error).to.be.true;
                expect(resultJson.code).to.eql(error.name);
                expect(resultJson.message).to.eql(error.message);
            });
        });

        describe('on options provided', () => {
            let result = null;

            beforeEach(() => {
                result = httpUtils.createErrorResponse(status, error, options);
            });

            it('should return CORS header', () => {
                expect(result.headers).to.eql(httpUtils.CORS_HEADERS);
            });
        });
    });
});
