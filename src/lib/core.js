import { docClient } from './identity.js';


export function getRankedParams(lastId) {
  let params = {
    TableName: 'lsystems',
    IndexName: 'RankedLSystems',
    KeyConditionExpression: '#type = :lsystem_type',
    ExpressionAttributeNames: {
      '#type' : 'type'
    },
    ExpressionAttributeValues: {
      ':lsystem_type': 'design'
    },
    ConsistentRead: false,
    ScanIndexForward: false,
    Select: 'ALL_PROJECTED_ATTRIBUTES',
    Limit: 1000
  };
  if (lastId) {
    console.log("With exclusive start key: " + lastId);
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
