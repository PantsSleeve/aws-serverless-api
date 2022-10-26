const statements = [
  {
    Effect: 'Allow',
    Action: [
      'xray:PutTraceSegments',
      'xray:PutTelemetryRecords',
    ],
    Resource: [
      '*',
    ],
  },
];

export default {
  role: {
    statements,
  },
};
