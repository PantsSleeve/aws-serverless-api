import type { AWS } from '@serverless/typescript';
import functions from './config/functions';
import iam from './config/iam';
import resources from './config/resources';

const serverlessConfiguration: AWS = {
  service: 'todo-add-repo-name',
  frameworkVersion: '3',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true,
    },
    'serverless-offline': {
      'noAuth': true,
      's': 'test',
    },
  },
  plugins: ['serverless-webpack', 'serverless-offline'],
  provider: {
    region: 'eu-north-1',
    httpApi: {
      cors: true,
      authorizers: {
        customAuthorizer: {
          name: 'authorizer',
          functionArn: '${self:provider.environment.AUTHORIZER}',
          type: 'request',
          resultTtlInSeconds: 3600,
          enableSimpleResponses: true,
          payloadVersion: '2.0',
          identitySource: '$request.header.Authorization',
        },
      },
    },
    deploymentBucket: {
      name: '${file(config/env.yml):${self:provider.stage}.AWS_ACCOUNT}.serverless.deploys',
    },
    name: 'aws',
    runtime: 'nodejs18.x',
    stage: '${opt:stage, "test"}',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: '${file(config/env.yml):${self:provider.stage}}' as any,
    iam,
  },
  functions,
  resources,
  package: {
    individually: true,
  },
};

module.exports = serverlessConfiguration;
