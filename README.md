[![Build Status](https://codebuild.eu-central-1.amazonaws.com/badges?uuid=eyJlbmNyeXB0ZWREYXRhIjoiZzk3SkpaN1hTN0ZhTFRpMjVQb3RCWVhoVTBKcjkvQ1p0SHNQazMzaG5MdTdqbitLSFh5cTc3SDhIWDVvWTk4b2VtV1lJbkRXNzlHQTdFVTJBTTdXbFo4PSIsIml2UGFyYW1ldGVyU3BlYyI6ImFKNFlkUE9hY3hkWlRRUjciLCJtYXRlcmlhbFNldFNlcmlhbCI6MX0%3D&branch=master)](https://eu-central-1.console.aws.amazon.com/codesuite/codebuild/projects/aws-access-utils)

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

## Contributing
Feedback, bug reports, and pull requests are welcome.

For pull requests, make sure to follow the following guidelines:
* Add tests for each new feature and bug fix.
* Follow the existing code style, enforced by eslint.
* Separate unrelated changes into multiple pull requests.

## License
Apache License 2.0, see [LICENSE](LICENSE.md).
