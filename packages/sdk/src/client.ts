import { GraphQLClient } from 'graphql-request';
import { getSdk, Sdk } from './__generated_sdk';
import { serializeUserAgent } from './utils';

class ClientSuggestic extends GraphQLClient {
  private token: string;

  private sourceURL: string;

  constructor(token: string, user?: string, url = 'https://production.suggestic.com/graphql') {
    const options = {
      headers: {
        Authorization: `Token ${token}`,
        /** Override any user agent with the sdk name and version */
        'User-Agent': serializeUserAgent({
          [process.env.npm_package_name ?? '@suggestic/sdk']: process.env.npm_package_version ?? 'unknown',
        }),
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

  getUser(userId: string): Suggestic {
    return new Suggestic(this.token, userId, this.sourceURL);
  }
}

export class Suggestic extends ClientSuggestic {}

export interface Suggestic extends Sdk {}
