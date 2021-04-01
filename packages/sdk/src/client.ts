import { GraphQLClient } from 'graphql-request';
import { getSdk, Sdk } from './__generated_sdk';

class ClientSuggestic extends GraphQLClient {
  private token: string;

  private sourceURL: string;

  constructor(token: string, user?: string, url = 'https://production.suggestic.com/graphql') {
    const options = {
      headers: {
        Authorization: `Token ${token}`,
      },
    };
    if (user) {
      options.headers['SG-User'] = user;
    }

    super(url, options);

    this.token = token;
    this.sourceURL = url;
    Object.assign(this, getSdk(this));
  }

  getUser(userId: string): ClientSuggestic {
    return new ClientSuggestic(this.token, userId, this.sourceURL);
  }
}

export class Suggestic extends ClientSuggestic {}

export interface Suggestic extends Sdk {}
