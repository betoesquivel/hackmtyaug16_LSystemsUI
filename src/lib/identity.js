// The parameters required to intialize the Cognito Credentials object.
// If you are authenticating your users through one of the supported
// identity providers you should set the Logins object with the provider
// tokens. For example:
// Logins: {
//   graph.facebook.com : facebookResponse.authResponse.accessToken
// }
var params = {
    IdentityPoolId: "eu-west-1:9f04fb5e-a4fc-4158-ae86-f3e068f6fd14"
};
 
//AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    //AccountId: process.env.DUMMY_AWS_ACCOUNT_ID,
    //IdentityPoolId: process.env.COGNITO_IDENTITY_POOL_ID,
    //RoleArn: process.env.COGNITO_UNAUTH_ROLE_ARN
//});
// set the Amazon Cognito region
AWS.config.region = 'eu-west-1';
// initialize the Credentials object with our parameters
AWS.config.credentials = new AWS.CognitoIdentityCredentials(params);
// We can set the get method of the Credentials object to retrieve
// the unique identifier for the end user (identityId) once the provider
// has refreshed itself
AWS.config.credentials.get(function(err) {
    if (err) {
        console.log("Error: "+err);
        return;
    }
    console.log("Cognito Identity Id: " + AWS.config.credentials.identityId);
 
    // Other service clients will automatically use the Cognito Credentials provider
    // configured in the JavaScript SDK.
    var cognitoSyncClient = new AWS.CognitoSync();
    cognitoSyncClient.listDatasets({
        IdentityId: AWS.config.credentials.identityId,
        IdentityPoolId: params.IdentityPoolId
    }, function(err, data) {
        if ( !err ) {
            console.log(JSON.stringify(data));
        }
    });
});

// Initialize the Amazon Cognito credentials provider
export const docClient = new AWS.DynamoDB.DocumentClient();
