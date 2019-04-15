[![Build Status](https://codebuild.eu-central-1.amazonaws.com/badges?uuid=eyJlbmNyeXB0ZWREYXRhIjoiSjQ4YW1KYm9wT2pIOUdCaGorR2FSQks0c0hSUjhBSUJPVHZHajFHcWk2UlhRWWdJT0swTmFRK1NQaStwMEVXTlB1MTdSVGgwdzFEMGRuN2VtZllUZUdrPSIsIml2UGFyYW1ldGVyU3BlYyI6Im12L2dmVWVickFDdWFXQVQiLCJtYXRlcmlhbFNldFNlcmlhbCI6MX0%3D&branch=master)](https://eu-central-1.console.aws.amazon.com/codesuite/codebuild/projects/codebuild-aws-acess-utils/history)

# AWS access utils library
This library wraps access to AWS services. All services are accessed with usage of AWS X-Ray.

# Installation
`npm install aws-access-utils`

# Usage
Import module and start using it as specified in https://github.com/aws/aws-sdk-js

List of wrapped AWS services
- AWS
- DynamoDb
- Lambda
- SES
- SNS
- StepFunctions

For full list of functionality see `index.js`.

## Accessing local AWS services
This library provides also ways of accessing local instances of AWS services. Local access to AWS services is configured using environment variables. 
If no environment variables are specified, default values are used. For more info see `/src/config.js`.  

## Testing this library
To execute tests run `npm test`.
