# Suggestic Node Package

Documentation for the Suggestic API can be found [here](https://docs.suggestic.com/graphql/)


1.- Install suggestic node client
```.bash
yarn add @suggestic/sdk
```

2.- Create suggestic client
```.js
import { Suggestic } from "@suggestic/sdk";

const client = new Suggestic("{TOKEN}");
```

3.- Get a meal plan
```.js
async function getMealplan() {
  const user = client.getUser("{USER-ID}");
  const mealplan = await user.mealPlan();
  console.log(mealplan);
}

getMealplan();
```

### Development

Suggestic Node client uses [graphjql-code-generator](https://www.graphql-code-generator.com/)

- [sdk](https://github.com/suggestic/suggestic/tree/master/packages/sdk/README.md)
