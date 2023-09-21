const serverless = require("serverless-http");
const express = require("express");
const { getSSMData } = require("./utils/ssm");

const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.get("/", (req, res, next) => {
  console.log("Endpoint '/' invoked...");

  return res.json({
    "app": "aws-cross-account-ssm-access",
    "endpoints": [
      "/get-ssm-data"
    ]
  });
});

app.get("/get-ssm-data", async (req, res, next) => {
  try {
    const response = await getSSMData();

    return res.status(200).json(response);
  } catch (err) {
    console.error(err);

    next(err);
  }
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

app.use(async (err, req, res, next) => {
  res.status(200).json({
    error: JSON.stringify(err.message)
  });
});

module.exports.handler = serverless(app);
