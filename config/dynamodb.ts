// export const templateBackendDatabase = {
//   Type: 'AWS::DynamoDB::Table',
//   DeletionPolicy: 'Retain',
//   UpdateReplacePolicy: 'Retain',
//   Properties: {
//     TableName: 'TemplateBackendDatabase',
//     AttributeDefinitions: [
//       {
//         AttributeName: 'id',
//         AttributeType: 'S',
//       },
//       {
//         AttributeName: 'time',
//         AttributeType: 'S',
//       },
//     ],
//     KeySchema: [
//       {
//         AttributeName: 'id',
//         KeyType: 'HASH',
//       },
//       {
//         AttributeName: 'time',
//         KeyType: 'RANGE',
//       },
//     ],
//     PointInTimeRecoverySpecification: {
//       PointInTimeRecoveryEnabled: true,
//     },
//     BillingMode: 'PAY_PER_REQUEST',
//   },
// };
