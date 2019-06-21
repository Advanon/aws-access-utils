const AWS = require('./aws');
const ssm = new AWS.SSM();

const resolve = async (key) => {
    const { Parameter } = await ssm
        .getParameter({
            Name: key,
            WithDecryption: true
        }).promise();

    return Parameter.Value;
};

module.exports = { resolve };
