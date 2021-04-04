import { Suggestic } from '.';

const client = new Suggestic('{TOKEN}');

async function getMealplan() {
  const user = client.getUser('{USER_ID}')
  await user.generateMealPlan();
  const mealplan = await user.mealPlan();
  console.info(mealplan);
}

getMealplan();
