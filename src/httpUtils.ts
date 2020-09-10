import { APIGatewayProxyResult } from "aws-lambda";

export const CORS_HEADERS = {
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
export const createErrorResponse = (
  statusCode: number,
  error: Error,
  options?: { cors: boolean }
): APIGatewayProxyResult => {
  // TODO: remove checks below once we finally switch to TS

  if (!statusCode) {
    throw new Error('Missing statusCode to return');
  }

  if (!error) {
    throw new Error('Missing error to return');
  }

  const response = {
    statusCode,
    ...options && options.cors && { headers: CORS_HEADERS },
    body: JSON.stringify({
      error: true,
      code: error.name,
      message: error.message
    })
  };

  return response;
};
