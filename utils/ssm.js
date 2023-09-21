const { SSMClient, GetParameterCommand } = require("@aws-sdk/client-ssm");

async function getSSMData() {
  try {
    const region = process.env.AWS_REGION_NAME;
    const parameterStoreName = process.env.AWS_PARAMETER_STORE_NAME;

    const client = new SSMClient({
      region
    });

    const input = {
      Name: parameterStoreName,
      WithDecryption: true
    };
    const command = new GetParameterCommand(input);

    const response = await client.send(command);

    return JSON.parse(response.Parameter.Value)
  } catch (err) {
    console.error(err);

    throw new Error(err.message)
  }
}

module.exports = {
  getSSMData
}
