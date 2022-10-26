export default {
  'hello': {
    handler: 'src/functions/hello/index.handler',
    events: [
      {
        httpApi: {
          path: '/hello',
          method: 'get',
          authorizer: 'customAuthorizer',
        },
      },
    ],
  },
};
