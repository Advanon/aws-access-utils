const { Lambda } = require('./aws');
const lambda = new Lambda();

const invoke = async (FunctionName, payload) => {
    const request = {
        FunctionName,
        Payload: JSON.stringify(payload)
    };
    const { Payload } = await lambda.invoke(request).promise();
    const result = JSON.parse(Payload);
    if (result && result.errorMessage) {
        throw new Error(result.errorMessage);
    }
    return result;
};

module.exports = { invoke };
