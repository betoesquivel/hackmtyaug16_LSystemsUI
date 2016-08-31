const region = 'eu-west-1';
AWS.config.update({region: region || 'eu-west-1'});
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    AccountId: process.env.DUMMY_AWS_ACCOUNT_ID,
    IdentityPoolId: process.env.COGNITO_IDENTITY_POOL_ID,
    RoleArn: process.env.COGNITO_UNAUTH_ROLE_ARN
});

const docClient = new AWS.DynamoDB.DocumentClient();

export function getRankedParams(lastId) {
  let params = {
    TableName: 'lsystems',
    ConsistentRead: false,
    ScanIndexForward: false,
    Select: 'ALL_PROJECTED_ATTRIBUTES'
  };
  if (lastId) {
    params.ExclusiveStartKey = {
      id: lastId,
    };
  }
  console.log(`Params been ${lastId}`);
  return params;
};
export function promiseIndividuals(lastId) {
  console.log(`Getting individuals starting at ${lastId}`);
  return docClient.query(getRankedParams(lastId)).promise()
              .catch( (err) => `Error downloading individuals\n ${JSON.stringify(err)}` )
};
