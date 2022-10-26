import { ok } from '../response';

export const handler = async (event: AWSLambda.APIGatewayEvent):
Promise<AWSLambda.APIGatewayProxyResult> => {
  console.log(event);
  return ok({ message: 'hello world' });
};
