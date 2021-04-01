import { Suggestic } from '.';

const client = new Suggestic('{TOKEN}', '{USER_ID}');

async function getMealplan() {
  // const mealplan = await client.mealPlan();
  const mealplan = await client.generateMealPlan();
  console.info(mealplan);
}

getMealplan();
