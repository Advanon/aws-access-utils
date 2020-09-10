import AWS from './aws';

const lambda = new AWS.Lambda();

export const invoke = async (FunctionName: string, payload: unknown): Promise<unknown> => {
  const request = {
    FunctionName,
    Payload: JSON.stringify(payload)
  };

  const { Payload } = await lambda.invoke(request).promise();
  const result = JSON.parse(Payload?.toString() || '');

  if (result && result.errorMessage) {
    throw new Error(result.errorMessage);
  }

  return result;
};
