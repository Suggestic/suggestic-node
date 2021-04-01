import { GraphQLClient } from 'graphql-request';
import { getSdk, Sdk } from './__generated_sdk';

class ClientSuggestic extends GraphQLClient {
  constructor(token: string, user: string) {
    const url = 'https://production.suggestic.com/graphql';
    const options = {
      headers: {
        Authorization: `Token ${token}`,
        'SG-User': user,
      },
    };
    super(url, options);

    Object.assign(this, getSdk(this));
  }
}

export class Suggestic extends ClientSuggestic {}

export interface Suggestic extends Sdk {}
