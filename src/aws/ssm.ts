import AWS from './aws';

const ssm = new AWS.SSM();

export const resolve = async (key: string): Promise<string | undefined> => {
  const { Parameter } = await ssm
    .getParameter({
      Name: key,
      WithDecryption: true
    }).promise();

  return Parameter?.Value;
};
