const httpUtils = require('../../src/httpUtils');

describe('httpUtils', () => {
    describe('CORS_HEADERS', () => {
        it('should export object', () => {
            expect(typeof httpUtils.CORS_HEADERS).toBe('object');
        });
    });
    describe('createErrorResponse', () => {
        const status = 400;
        const error = Error('customMessage');
        error.name = 'CustomErrorName';
        const options = { cors: true };

        test('should export function', () => {
            expect(typeof httpUtils.createErrorResponse).toBe('function');
        });

        describe('on missing status code', () => {
            test('should throw exception', () => {
                expect(() => httpUtils.createErrorResponse()).toThrow();
            });
        });

        describe('on no error', () => {
            test('should throw exception', () => {
                expect(() => httpUtils.createErrorResponse(status)).toThrow();
            });
        });

        describe('on no options', () => {
            let result = null;

            beforeEach(() => {
                result = httpUtils.createErrorResponse(status, error);
            });

            test('should return statusCode', () => {
                expect(result.statusCode).toEqual(status);
            });

            test('should return error body', () => {
                expect(typeof result.body).toBe('string');
            });

            test('should return error JSON body with parameters', () => {
                const resultJson = JSON.parse(result.body);
                expect(resultJson.error).toBe(true);
                expect(resultJson.code).toBe(error.name);
                expect(resultJson.message).toBe(error.message);
            });
        });

        describe('on options provided', () => {
            let result = null;

            beforeEach(() => {
                result = httpUtils.createErrorResponse(status, error, options);
            });

            test('should return CORS header', () => {
                expect(result.headers).toBe(httpUtils.CORS_HEADERS);
            });
        });
    });
});
