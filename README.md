# aws-lambda-ssm-access

Fetch AWS Parameter Store values by invoking AWS Lambda function

## Prerequisites

- Install serverless CLI tool
- Configure AWS profile

## Running locally

- Go to project directory and run:
  ```shell
  npm install

  serverless offline \
    --param="AWS_REGION_NAME=eu-central-1" \
    --param="AWS_PARAMETER_STORE_NAME=<YOUR_AWS_PARAMETER_STORE_NAME>" \
    --param="AWS_ACCOUNT_ID=<YOUR_AWS_ACCOUNT_ID>"
  ```

## Deploying top AWS Lambda

- Go to project directory and run:
  ```shell
  npm ci

  serverless deploy \
    --stage prod \
    --verbose \
    --aws-profile <AWS_PROFILE_NAME_HERE> \
    --param="AWS_REGION_NAME=eu-central-1" \
    --param="AWS_PARAMETER_STORE_NAME=<YOUR_AWS_PARAMETER_STORE_NAME>" \
    --param="AWS_ACCOUNT_ID=<YOUR_AWS_ACCOUNT_ID>"
  ```

## Reference

- https://www.serverless.com/framework/docs/getting-started
