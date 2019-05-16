const { Lambda } = require('./aws');
const { isOffline } = require('../config');

const invoke = async (region, functionName, payload) => {
    if (isOffline()) {
        return { StatusCode: 200 };
    }

    const lambda = new Lambda({ region });
    return lambda.invoke({
        FunctionName: functionName,
        Payload: JSON.stringify(payload)
    }).promise();
};

module.exports = { invoke };
