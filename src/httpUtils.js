const CORS_HEADERS = {
    'Access-Control-Allow-Origin': '*',
};

/**
 * Creates http response for lambda by given parameters with error body
 *
 * @param statusCode - mandatory HTTP response statusCode
 * @param error - mandatory javascript Error to be returned. Must contain 'code' and 'message'
 * @param options - optional additional parameters object.
 * If it contains `cors:true`, response will also contain CORS header.
 */
const createErrorResponse = (statusCode, error, options) => {
    if (!statusCode) {
        throw new Error('Missing statusCode to return');
    }
    if (!error) {
        throw new Error('Missing error to return');
    }

    const response = {
        statusCode,
        body: JSON.stringify({
            error: true,
            code: error.name,
            message: error.message
        })
    };

    if (options) {
        if (options.cors) {
            response.headers = CORS_HEADERS;
        }
    }

    return response;
};

module.exports = {createErrorResponse, CORS_HEADERS};
