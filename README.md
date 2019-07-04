[![Build Status](https://codebuild.eu-central-1.amazonaws.com/badges?uuid=eyJlbmNyeXB0ZWREYXRhIjoidXhVQTNoUlMvRE03a2EwUTVldTVTWCtpcWRIKzRJcDJGc3h2OTJpVzFxa3NtNlhCTVpZR2ZQZXRKM0lZL1B1bEtCTTlWaU1wU1hxLzZJWVpTQkE4eXZRPSIsIml2UGFyYW1ldGVyU3BlYyI6ImF1dmk0K25mckpmb2xtdTYiLCJtYXRlcmlhbFNldFNlcmlhbCI6MX0%3D&branch=master)](https://eu-central-1.console.aws.amazon.com/codesuite/codebuild/projects/global-dev-aws-access-utils-tf-pr-build)

# AWS access utils library
This library wraps access to AWS services. All services are accessed with usage of AWS X-Ray.

# Installation
`npm install aws-access-utils`

# Usage
Import module and start using it as specified in https://github.com/aws/aws-sdk-js

List of wrapped AWS services
- AWS
- DynamoDb
- SES
- SNS
- StepFunctions
- SSM

For full list of functionality see `index.js`.

## Accessing local AWS services
This library provides also ways of accessing local instances of AWS services. Local access to AWS services is configured using environment variables. 
If no environment variables are specified, default values are used. For more info see `/src/config.js`.  

## Testing this library
To execute tests run `npm test`.

## Contributing
Feedback, bug reports, and pull requests are welcome.

For pull requests, make sure to follow the following guidelines:
* Add tests for each new feature and bug fix.
* Follow the existing code style, enforced by eslint.
* Separate unrelated changes into multiple pull requests.

## License
Apache License 2.0, see [LICENSE](LICENSE.md).
