import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  GenericScalar: any;
  JSONString: any;
  Time: any;
  UUID: any;
};

export enum Actiontype {
  Increase = 'INCREASE',
  Decrease = 'DECREASE'
}

export enum ActivityLevel {
  NotActive = 'NOT_ACTIVE',
  Exercise_1_2 = 'EXERCISE_1_2',
  Exercise_3More = 'EXERCISE_3_MORE',
  Exercise_1 = 'EXERCISE_1',
  Exercise_2 = 'EXERCISE_2'
}

export type AddRecipesToShoppingList = {
  __typename?: 'AddRecipesToShoppingList';
  success?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
};

export type AddToShoppingList = {
  __typename?: 'AddToShoppingList';
  success?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
};

export type Adherence = {
  __typename?: 'Adherence';
  score?: Maybe<Scalars['Float']>;
  color?: Maybe<AdherenceColor>;
  icon?: Maybe<Icon>;
  title?: Maybe<Scalars['String']>;
  reason?: Maybe<Scalars['String']>;
  isRecommended?: Maybe<Scalars['Boolean']>;
};

export enum AdherenceColor {
  Green = 'GREEN',
  Yellow = 'YELLOW',
  Red = 'RED',
  Blue = 'BLUE',
  Grey = 'GREY'
}

export type Aggregate = Node & {
  __typename?: 'Aggregate';
  id: Scalars['ID'];
  profile: ProfileType;
  aisleName?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  grams?: Maybe<Scalars['Float']>;
  unit?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  ingredient?: Maybe<Scalars['String']>;
  isDone: Scalars['Boolean'];
  isCleared: Scalars['Boolean'];
  updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  meta: Scalars['JSONString'];
  listitemSet?: Maybe<ListItemConnection>;
  databaseId?: Maybe<Scalars['String']>;
  aggregateMeta?: Maybe<AggregateMeta>;
  servingEquivalent?: Maybe<Scalars['Float']>;
};


export type AggregateListitemSetArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  recipe?: Maybe<Scalars['ID']>;
};

export type AggregateConnection = {
  __typename?: 'AggregateConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<AggregateEdge>>;
};

export type AggregateEdge = {
  __typename?: 'AggregateEdge';
  node?: Maybe<Aggregate>;
  cursor: Scalars['String'];
};

export type AggregateMeta = {
  __typename?: 'AggregateMeta';
  aisle?: Maybe<Scalars['String']>;
  ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  idsContribution?: Maybe<Array<Maybe<Contribution>>>;
  name?: Maybe<Scalars['String']>;
  qty?: Maybe<Scalars['Int']>;
  rawQty?: Maybe<Scalars['Float']>;
  /** @deprecated Not used, will be removed */
  grams?: Maybe<Scalars['Float']>;
};

export type Answer = {
  __typename?: 'Answer';
  id?: Maybe<Scalars['ID']>;
  answer?: Maybe<Scalars['String']>;
  selected?: Maybe<Scalars['Boolean']>;
};

export type AppRestriction = {
  __typename?: 'AppRestriction';
  feature: Scalars['String'];
  limitations: Array<Limitation>;
};

export enum AttrDataType {
  String = 'STRING',
  Int = 'INT',
  Float = 'FLOAT',
  Boolean = 'BOOLEAN'
}

export enum BiologicalSex {
  Male = 'MALE',
  Female = 'FEMALE'
}

export type Cpc = {
  __typename?: 'CPC';
  benefits?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  simpleExamples?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type CpcIngredient = {
  __typename?: 'CPCIngredient';
  cpcName?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['String']>;
  softmax?: Maybe<Scalars['String']>;
};

export type CpcIngredientGroup = {
  __typename?: 'CPCIngredientGroup';
  avoid?: Maybe<Array<Maybe<Cpc>>>;
  decrease?: Maybe<Array<Maybe<Cpc>>>;
  increase?: Maybe<Array<Maybe<Cpc>>>;
};

export type CaloriesPerServing = {
  __typename?: 'CaloriesPerServing';
  protein?: Maybe<Scalars['Float']>;
  carbs?: Maybe<Scalars['Float']>;
  fat?: Maybe<Scalars['Float']>;
  dha?: Maybe<Scalars['Float']>;
  dpa?: Maybe<Scalars['Float']>;
  epa?: Maybe<Scalars['Float']>;
  ala?: Maybe<Scalars['Float']>;
  saturatedFat?: Maybe<Scalars['Float']>;
  monounsaturatedFat?: Maybe<Scalars['Float']>;
  polyunsaturatedFat?: Maybe<Scalars['Float']>;
  transFat?: Maybe<Scalars['Float']>;
  omega3?: Maybe<Scalars['Float']>;
};

export type ChangeMealPlannerDayMeal = {
  __typename?: 'ChangeMealPlannerDayMeal';
  recipe?: Maybe<Recipe>;
  success?: Maybe<Scalars['Boolean']>;
};

export type ClearShoppingList = {
  __typename?: 'ClearShoppingList';
  success?: Maybe<Scalars['Boolean']>;
};

export type ClearShoppingListCheckedItems = {
  __typename?: 'ClearShoppingListCheckedItems';
  success?: Maybe<Scalars['Boolean']>;
};

export type ContentCategoryType = Node & {
  __typename?: 'ContentCategoryType';
  id: Scalars['ID'];
  name: Scalars['String'];
  slug: Scalars['String'];
  contentlibrarySet?: Maybe<ContentLibraryTypeConnection>;
  databaseId?: Maybe<Scalars['String']>;
};


export type ContentCategoryTypeContentlibrarySetArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type ContentCategoryTypeConnection = {
  __typename?: 'ContentCategoryTypeConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<ContentCategoryTypeEdge>>;
};

export type ContentCategoryTypeEdge = {
  __typename?: 'ContentCategoryTypeEdge';
  node?: Maybe<ContentCategoryType>;
  cursor: Scalars['String'];
};

export type ContentLibraryType = Node & {
  __typename?: 'ContentLibraryType';
  id: Scalars['ID'];
  title: Scalars['String'];
  subTitle?: Maybe<Scalars['String']>;
  isBlocked: Scalars['Boolean'];
  categories?: Maybe<Array<Maybe<ContentCategoryType>>>;
  imageUrl: Scalars['String'];
  sourceUrl: Scalars['String'];
  databaseId?: Maybe<Scalars['String']>;
};

export type ContentLibraryTypeConnection = {
  __typename?: 'ContentLibraryTypeConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<ContentLibraryTypeEdge>>;
};

export type ContentLibraryTypeEdge = {
  __typename?: 'ContentLibraryTypeEdge';
  node?: Maybe<ContentLibraryType>;
  cursor: Scalars['String'];
};

export type Contribution = {
  __typename?: 'Contribution';
  eqv?: Maybe<Scalars['Float']>;
  databaseId?: Maybe<Scalars['String']>;
};

export type CreateDailyRecapEntry = {
  __typename?: 'CreateDailyRecapEntry';
  success?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
};

export type CreateGooglePlayTransaction = {
  __typename?: 'CreateGooglePlayTransaction';
  success?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
};

export type CreateMealEntry = {
  __typename?: 'CreateMealEntry';
  success: Scalars['Boolean'];
  message: Scalars['String'];
};

export type CreateMealLogMutation = {
  __typename?: 'CreateMealLogMutation';
  success?: Maybe<Scalars['Boolean']>;
  databaseId?: Maybe<Scalars['String']>;
};

export type CreateOwnMealLogMutation = {
  __typename?: 'CreateOwnMealLogMutation';
  success?: Maybe<Scalars['Boolean']>;
  databaseId?: Maybe<Scalars['String']>;
};

export type CreateOwnRecipe = {
  __typename?: 'CreateOwnRecipe';
  success?: Maybe<Scalars['Boolean']>;
  databaseId?: Maybe<Scalars['String']>;
};

export type CreateProfileBiomarkers = {
  __typename?: 'CreateProfileBiomarkers';
  success?: Maybe<Scalars['Boolean']>;
};

export type CreateProfileCustomAttributes = {
  __typename?: 'CreateProfileCustomAttributes';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Array<Maybe<ErrorType>>>;
};

export type CreateQuizResult = {
  __typename?: 'CreateQuizResult';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Array<Maybe<ErrorType>>>;
};

export type CreateUser = {
  __typename?: 'CreateUser';
  success?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type CreateWeightEntry = {
  __typename?: 'CreateWeightEntry';
  success?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
};

export type DailyRecap = {
  __typename?: 'DailyRecap';
  id?: Maybe<Scalars['ID']>;
  question?: Maybe<Scalars['String']>;
  done?: Maybe<Scalars['Boolean']>;
  imageUrl?: Maybe<Scalars['String']>;
  answers?: Maybe<Array<Maybe<Answer>>>;
};

export type Dashboard = {
  __typename?: 'Dashboard';
  components: Array<EntryType>;
};

export type DashboardPdfType = {
  __typename?: 'DashboardPDFType';
  id: Scalars['ID'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  pdfFile?: Maybe<Scalars['String']>;
  pdfUrl?: Maybe<Scalars['String']>;
  dashboardSet?: Maybe<Array<Maybe<JourneyType>>>;
  databaseId?: Maybe<Scalars['String']>;
};



export type Day = {
  __typename?: 'Day';
  closing?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  opening?: Maybe<Scalars['String']>;
};

export type DayMeal = Node & {
  __typename?: 'DayMeal';
  id: Scalars['ID'];
  program: Program;
  day: Scalars['Int'];
  mealTime: DayMealMealTime;
  isActive: Scalars['Boolean'];
  updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  meta?: Maybe<Scalars['JSONString']>;
  databaseId?: Maybe<Scalars['String']>;
  recipeId?: Maybe<Scalars['String']>;
};

export type DayMealConnection = {
  __typename?: 'DayMealConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<DayMealEdge>>;
};

export type DayMealEdge = {
  __typename?: 'DayMealEdge';
  node?: Maybe<DayMeal>;
  cursor: Scalars['String'];
};

export enum DayMealMealTime {
  Breakfast = 'BREAKFAST',
  Dinner = 'DINNER',
  Snack = 'SNACK',
  Lunch = 'LUNCH'
}

export enum DayStatus {
  PerfectDay = 'PERFECT_DAY',
  RegularDay = 'REGULAR_DAY',
  GoodDay = 'GOOD_DAY',
  EmptyDay = 'EMPTY_DAY'
}

export enum DialogCollectionType {
  Bool = 'BOOL',
  Char = 'CHAR',
  Int = 'INT',
  Datetime = 'DATETIME'
}

export enum DialogPublicationStatus {
  Draft = 'DRAFT',
  Review = 'REVIEW',
  Published = 'PUBLISHED',
  Removed = 'REMOVED'
}

export type DialogType = {
  __typename?: 'DialogType';
  id: Scalars['ID'];
  name: Scalars['String'];
  defaultJump: Scalars['String'];
  jumpFalse: Scalars['String'];
  author?: Maybe<Scalars['UUID']>;
  story?: Maybe<Scalars['UUID']>;
  condition?: Maybe<Scalars['String']>;
  taskList?: Maybe<TaskListType>;
  isActive: Scalars['Boolean'];
  needSpellCheck: Scalars['Boolean'];
  isComplete: Scalars['Boolean'];
  title?: Maybe<Scalars['String']>;
  video: Scalars['String'];
  endpoint: Scalars['String'];
  valueType?: Maybe<DialogValueType>;
  type: Scalars['String'];
  action: Scalars['String'];
  deviceAction: Scalars['String'];
  field: Scalars['String'];
  catalog: Scalars['String'];
  collectionType?: Maybe<DialogCollectionType>;
  note?: Maybe<Scalars['String']>;
  variableValue?: Maybe<Scalars['String']>;
  htmlUrl?: Maybe<Scalars['String']>;
  messages?: Maybe<Array<Maybe<Scalars['String']>>>;
  tags: Array<Maybe<Scalars['String']>>;
  messagesTranslations?: Maybe<Scalars['JSONString']>;
  optionsTranslations?: Maybe<Scalars['JSONString']>;
  image: Scalars['String'];
  publicationStatus: DialogPublicationStatus;
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  globalCount: Scalars['Int'];
  attachment?: Maybe<Scalars['GenericScalar']>;
  uploadedVideo?: Maybe<Scalars['String']>;
  dashboarddialogSet?: Maybe<Array<Maybe<JourneyDialogType>>>;
  databaseId?: Maybe<Scalars['String']>;
  videoThumbnail?: Maybe<Scalars['String']>;
};

export enum DialogValueType {
  Integer = 'INTEGER',
  Float = 'FLOAT',
  String = 'STRING',
  Null = 'NULL',
  Date = 'DATE',
  Datetime = 'DATETIME'
}

export enum DietaryTag {
  Vegetarian = 'VEGETARIAN',
  DairyFree = 'DAIRY_FREE',
  GlutenFree = 'GLUTEN_FREE',
  PlantBased = 'PLANT_BASED',
  Vegan = 'VEGAN'
}

export type EdamamFoodResult = Node & {
  __typename?: 'EdamamFoodResult';
  id: Scalars['ID'];
  databaseId?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  servings?: Maybe<Array<Maybe<Servings>>>;
};

export type Entry = {
  __typename?: 'Entry';
  value?: Maybe<Scalars['Float']>;
  date?: Maybe<Scalars['Date']>;
};

export enum EntryType {
  WeightTracker = 'WEIGHT_TRACKER',
  HydrationTracker = 'HYDRATION_TRACKER',
  DailyRecap = 'DAILY_RECAP',
  MpMealTracker = 'MP_MEAL_TRACKER'
}

export type ErrorType = {
  __typename?: 'ErrorType';
  field?: Maybe<Scalars['String']>;
  messages?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FoodProduct = {
  __typename?: 'FoodProduct';
  name?: Maybe<Scalars['String']>;
  longDesc?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  mealType?: Maybe<MealType>;
  databaseId?: Maybe<Scalars['String']>;
  serving?: Maybe<Scalars['Int']>;
  servings?: Maybe<Array<Maybe<Servings>>>;
  nutrients?: Maybe<Nutrients>;
  nutrientsFull?: Maybe<RawNutrientsFull>;
  isVerified?: Maybe<Scalars['Boolean']>;
  isIncomplete?: Maybe<Scalars['Boolean']>;
  nutritionalInfo?: Maybe<NutritionalInfo>;
};

export type GenerateMealPlan = {
  __typename?: 'GenerateMealPlan';
  /** @deprecated Not used, will be removed */
  mealPlan?: Maybe<Array<Maybe<MealPlanDay>>>;
  success?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
};

export type GenerateSimpleMealPlan = {
  __typename?: 'GenerateSimpleMealPlan';
  success?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
};


export type GeoBoundingBox = {
  topLeftLon?: Maybe<Scalars['Float']>;
  topLeftLat?: Maybe<Scalars['Float']>;
  bottomRightLon?: Maybe<Scalars['Float']>;
  bottomRightLat?: Maybe<Scalars['Float']>;
};

export type GeoPoint = {
  __typename?: 'GeoPoint';
  lat?: Maybe<Scalars['Float']>;
  lon?: Maybe<Scalars['Float']>;
};

export type GooglePlayTransactionType = Node & {
  __typename?: 'GooglePlayTransactionType';
  id: Scalars['ID'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  subscriptionSku?: Maybe<Scalars['String']>;
  purchaseToken?: Maybe<Scalars['String']>;
  orderId: Scalars['String'];
  isSandbox: Scalars['Boolean'];
  isActive: Scalars['Boolean'];
  isInitial: Scalars['Boolean'];
  profile: ProfileType;
  rawData?: Maybe<Scalars['GenericScalar']>;
  isTrialPeriod: Scalars['Boolean'];
  databaseId?: Maybe<Scalars['String']>;
};

export type GooglePlayTransactionTypeConnection = {
  __typename?: 'GooglePlayTransactionTypeConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<GooglePlayTransactionTypeEdge>>;
};

export type GooglePlayTransactionTypeEdge = {
  __typename?: 'GooglePlayTransactionTypeEdge';
  node?: Maybe<GooglePlayTransactionType>;
  cursor: Scalars['String'];
};

export type HardDeleteMyProfileMutation = {
  __typename?: 'HardDeleteMyProfileMutation';
  success?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
};

export type Hours = {
  __typename?: 'Hours';
  monday?: Maybe<Day>;
  tuesday?: Maybe<Day>;
  wednesday?: Maybe<Day>;
  thursday?: Maybe<Day>;
  friday?: Maybe<Day>;
  saturday?: Maybe<Day>;
  sunday?: Maybe<Day>;
};

export type Hydration = {
  __typename?: 'Hydration';
  isToday?: Maybe<Scalars['Boolean']>;
  date?: Maybe<Scalars['Date']>;
  quantity?: Maybe<Scalars['Int']>;
  goal?: Maybe<Scalars['Int']>;
};

export enum Icon {
  Cross = 'CROSS',
  Unknown = 'UNKNOWN',
  Alert = 'ALERT'
}

export type Ingredient = {
  __typename?: 'Ingredient';
  name?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  cpc?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['Float']>;
};

export type IngredientLine = {
  __typename?: 'IngredientLine';
  ingredient?: Maybe<Scalars['String']>;
  ingredientLine?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
  other?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
};

export type IngredientSearchResult = EdamamFoodResult;

export type IngredientSearchResultConnection = {
  __typename?: 'IngredientSearchResultConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<IngredientSearchResultEdge>>;
};

export type IngredientSearchResultEdge = {
  __typename?: 'IngredientSearchResultEdge';
  node?: Maybe<IngredientSearchResult>;
  cursor: Scalars['String'];
};


export type JourneyDialogType = {
  __typename?: 'JourneyDialogType';
  id: Scalars['ID'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  dashboard: JourneyType;
  dialog: DialogType;
  sortIndex: Scalars['Int'];
  databaseId?: Maybe<Scalars['String']>;
};

export type JourneyProfileType = Node & {
  __typename?: 'JourneyProfileType';
  id: Scalars['ID'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  dashboard: JourneyType;
  profile: ProfileType;
  status?: Maybe<JourneyStatus>;
  databaseId?: Maybe<Scalars['String']>;
};

export type JourneyProfileTypeConnection = {
  __typename?: 'JourneyProfileTypeConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<JourneyProfileTypeEdge>>;
};

export type JourneyProfileTypeEdge = {
  __typename?: 'JourneyProfileTypeEdge';
  node?: Maybe<JourneyProfileType>;
  cursor: Scalars['String'];
};

export enum JourneyStatus {
  Close = 'CLOSE',
  Open = 'OPEN',
  Finish = 'FINISH'
}

export type JourneyType = {
  __typename?: 'JourneyType';
  id: Scalars['ID'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  program?: Maybe<Program>;
  daysIntoProgram: Scalars['Int'];
  pdfs: Array<Maybe<Scalars['String']>>;
  jump?: Maybe<JourneyType>;
  title?: Maybe<Scalars['String']>;
  subTitle?: Maybe<Scalars['String']>;
  subscriptions?: Maybe<SubscriptionTypeConnection>;
  pdfsRel?: Maybe<Array<Maybe<DashboardPdfType>>>;
  jumpTo?: Maybe<Array<Maybe<JourneyType>>>;
  dashboardDialogs?: Maybe<Array<Maybe<JourneyDialogType>>>;
  dashboardprofileSet?: Maybe<JourneyProfileTypeConnection>;
  databaseId?: Maybe<Scalars['String']>;
};


export type JourneyTypeSubscriptionsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['UUID']>;
};


export type JourneyTypeDashboardprofileSetArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['UUID']>;
};

export enum Kind {
  Sleep = 'SLEEP',
  Mood = 'MOOD'
}

export enum Level {
  Bad = 'BAD',
  Average = 'AVERAGE',
  Good = 'GOOD'
}

export type Limitation = {
  __typename?: 'Limitation';
  limit: Scalars['Int'];
  level: Scalars['String'];
  periodicity: Scalars['String'];
};

export type ListItem = Node & {
  __typename?: 'ListItem';
  id: Scalars['ID'];
  recipeName?: Maybe<Scalars['String']>;
  profile: ProfileType;
  aisleName?: Maybe<Scalars['String']>;
  grams?: Maybe<Scalars['Float']>;
  comment?: Maybe<Scalars['String']>;
  ingredientLine?: Maybe<Scalars['String']>;
  ingredient: Scalars['String'];
  isDone: Scalars['Boolean'];
  isCleared: Scalars['Boolean'];
  parse: Scalars['JSONString'];
  recipeServings?: Maybe<Scalars['Int']>;
  numberOfServings?: Maybe<Scalars['Int']>;
  aggregation?: Maybe<AggregateConnection>;
  updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  quantity?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
  quantityMetric?: Maybe<Scalars['String']>;
  unitMetric?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  databaseId?: Maybe<Scalars['String']>;
  recipeId?: Maybe<Scalars['String']>;
  floatQuantity?: Maybe<Scalars['Float']>;
};


export type ListItemAggregationArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['UUID']>;
};

export type ListItemConnection = {
  __typename?: 'ListItemConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<ListItemEdge>>;
};

export type ListItemEdge = {
  __typename?: 'ListItemEdge';
  node?: Maybe<ListItem>;
  cursor: Scalars['String'];
};

export type LocationAutocomplete = {
  __typename?: 'LocationAutocomplete';
  zipcode?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['Int']>;
  daylightSavingsTimeFlag?: Maybe<Scalars['Boolean']>;
  suggest?: Maybe<Scalars['String']>;
  location?: Maybe<GeoPoint>;
};

export type LogRecipeIngredient = {
  __typename?: 'LogRecipeIngredient';
  id?: Maybe<Scalars['String']>;
  mealType?: Maybe<MealType>;
  quantity?: Maybe<Scalars['Int']>;
  serving?: Maybe<Scalars['Int']>;
};

export type Logger = Node & {
  __typename?: 'Logger';
  id: Scalars['ID'];
  user?: Maybe<Scalars['String']>;
  profileId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  program?: Maybe<Scalars['String']>;
  isPremium?: Maybe<Scalars['Boolean']>;
  restrictions?: Maybe<Array<Maybe<Scalars['String']>>>;
  adherenceScore?: Maybe<Scalars['Float']>;
  statusCode?: Maybe<Scalars['String']>;
  method?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  host?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['String']>;
  requestGet?: Maybe<Scalars['GenericScalar']>;
  requestPost?: Maybe<Scalars['GenericScalar']>;
  requestBody?: Maybe<Scalars['String']>;
  response?: Maybe<Scalars['GenericScalar']>;
  location?: Maybe<Array<Maybe<Scalars['Float']>>>;
  indexedAt?: Maybe<Scalars['DateTime']>;
};

export type LoggerConnection = {
  __typename?: 'LoggerConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<LoggerEdge>>;
};

export type LoggerEdge = {
  __typename?: 'LoggerEdge';
  node?: Maybe<Logger>;
  cursor: Scalars['String'];
};

export type MacroGoals = {
  __typename?: 'MacroGoals';
  name?: Maybe<Scalars['String']>;
  bmr?: Maybe<Scalars['Int']>;
  tdee?: Maybe<Scalars['Int']>;
  cd?: Maybe<Scalars['Int']>;
  dcig?: Maybe<Scalars['Int']>;
  isUserGoal?: Maybe<Scalars['Boolean']>;
  carbs?: Maybe<MacroNutrientGoal>;
  protein?: Maybe<MacroNutrientGoal>;
  fat?: Maybe<MacroNutrientGoal>;
  netcarbs?: Maybe<MacroNutrientGoal>;
};

export type MacroNutrientGoal = {
  __typename?: 'MacroNutrientGoal';
  goal?: Maybe<Scalars['Int']>;
  logged?: Maybe<Scalars['Int']>;
  left?: Maybe<Scalars['Int']>;
  color?: Maybe<Scalars['String']>;
  upperLimit?: Maybe<Scalars['Float']>;
  lowerLimit?: Maybe<Scalars['Float']>;
};

export type MacroNutrientsRangeInput = {
  proteinCalories?: Maybe<Range>;
  fatCalories?: Maybe<Range>;
  carbsCalories?: Maybe<Range>;
  calories?: Maybe<Range>;
  protein?: Maybe<Range>;
  fat?: Maybe<Range>;
  carbs?: Maybe<Range>;
  sugar?: Maybe<Range>;
  fiber?: Maybe<Range>;
  saturatedFat?: Maybe<Range>;
  monounsaturatedFat?: Maybe<Range>;
  polyunsaturatedFat?: Maybe<Range>;
  transFat?: Maybe<Range>;
  cholesterol?: Maybe<Range>;
  sodium?: Maybe<Range>;
  potassium?: Maybe<Range>;
  vitaminA?: Maybe<Range>;
  vitaminB6?: Maybe<Range>;
  vitaminB12?: Maybe<Range>;
  vitaminC?: Maybe<Range>;
  vitaminD?: Maybe<Range>;
  vitaminE?: Maybe<Range>;
  calcium?: Maybe<Range>;
  iron?: Maybe<Range>;
  netcarbs?: Maybe<Range>;
  dha?: Maybe<Range>;
  dpa?: Maybe<Range>;
  epa?: Maybe<Range>;
  ala?: Maybe<Range>;
};

export type Meal = {
  __typename?: 'Meal';
  id?: Maybe<Scalars['String']>;
  recipe?: Maybe<Recipe>;
  meal?: Maybe<Scalars['String']>;
  numOfServings?: Maybe<Scalars['Int']>;
  maxNumOfServings?: Maybe<Scalars['Int']>;
  calories?: Maybe<Scalars['Float']>;
};

export type MealCustomPlannerDays = {
  __typename?: 'MealCustomPlannerDays';
  day1?: Maybe<Array<Maybe<MealPlanDayRecipe>>>;
  day2?: Maybe<Array<Maybe<MealPlanDayRecipe>>>;
  day3?: Maybe<Array<Maybe<MealPlanDayRecipe>>>;
  day4?: Maybe<Array<Maybe<MealPlanDayRecipe>>>;
  day5?: Maybe<Array<Maybe<MealPlanDayRecipe>>>;
  day6?: Maybe<Array<Maybe<MealPlanDayRecipe>>>;
  day7?: Maybe<Array<Maybe<MealPlanDayRecipe>>>;
  day8?: Maybe<Array<Maybe<MealPlanDayRecipe>>>;
};

export type MealLog = Node & {
  __typename?: 'MealLog';
  id: Scalars['ID'];
  databaseId?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  userPid?: Maybe<Scalars['String']>;
  mealType?: Maybe<MealType>;
  mealTime?: Maybe<MealTime>;
  mealTypeDisplayName?: Maybe<Scalars['String']>;
  mealDatabaseId?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Float']>;
  adherence?: Maybe<Scalars['Float']>;
  nutrients?: Maybe<Nutrients>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  extraInfo?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  serving?: Maybe<Scalars['Int']>;
  servings?: Maybe<Array<Maybe<Servings>>>;
  nutrientsFull?: Maybe<NutrientsFull>;
  macrosLog?: Maybe<Nutrients>;
  brand?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['DateTime']>;
  isNew?: Maybe<Scalars['Boolean']>;
  ingredients?: Maybe<Array<Maybe<LogRecipeIngredient>>>;
  isVerified?: Maybe<Scalars['Boolean']>;
  barcode?: Maybe<Scalars['String']>;
  secondaryInfoText?: Maybe<Scalars['String']>;
  nutritionalInfo?: Maybe<NutritionalInfo>;
  servingWeight?: Maybe<Scalars['Float']>;
};

export type MealLogConnection = {
  __typename?: 'MealLogConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<MealLogEdge>>;
};

export type MealLogEdge = {
  __typename?: 'MealLogEdge';
  node?: Maybe<MealLog>;
  cursor: Scalars['String'];
};

export type MealLogMacroAggs = {
  __typename?: 'MealLogMacroAggs';
  chocdf?: Maybe<Scalars['Float']>;
  fat?: Maybe<Scalars['Float']>;
  sugar?: Maybe<Scalars['Float']>;
  procnt?: Maybe<Scalars['Float']>;
  fibtg?: Maybe<Scalars['Float']>;
  netcarbs?: Maybe<Scalars['Float']>;
};

export type MealPlanDay = {
  __typename?: 'MealPlanDay';
  date?: Maybe<Scalars['String']>;
  day?: Maybe<Scalars['Int']>;
  calories?: Maybe<Scalars['Float']>;
  meals?: Maybe<Array<Maybe<Meal>>>;
};

export type MealPlanDayRecipe = {
  __typename?: 'MealPlanDayRecipe';
  programDate?: Maybe<Scalars['Date']>;
  recipe?: Maybe<Recipe>;
  mealTime?: Maybe<Scalars['String']>;
};

export type MealPlannerDayTime = {
  __typename?: 'MealPlannerDayTime';
  programDate?: Maybe<Scalars['Date']>;
  breakfast?: Maybe<Array<Maybe<Recipe>>>;
  lunch?: Maybe<Array<Maybe<Recipe>>>;
  snack?: Maybe<Array<Maybe<Recipe>>>;
  dinner?: Maybe<Array<Maybe<Recipe>>>;
};

export type MealPlannerDays = {
  __typename?: 'MealPlannerDays';
  day1?: Maybe<MealPlannerDayTime>;
  day2?: Maybe<MealPlannerDayTime>;
  day3?: Maybe<MealPlannerDayTime>;
  day4?: Maybe<MealPlannerDayTime>;
  day5?: Maybe<MealPlannerDayTime>;
  day6?: Maybe<MealPlannerDayTime>;
  day7?: Maybe<MealPlannerDayTime>;
  day8?: Maybe<MealPlannerDayTime>;
};

export enum MealPlannerQueryType {
  Raw = 'RAW',
  DayAggregate = 'DAY_AGGREGATE',
  Suggestions = 'SUGGESTIONS'
}

export enum MealTime {
  Breakfast = 'BREAKFAST',
  Lunch = 'LUNCH',
  Dinner = 'DINNER',
  Snack = 'SNACK'
}

export type MealTrack = {
  __typename?: 'MealTrack';
  mealId: Scalars['ID'];
  value: MealTrackStatus;
  date: Scalars['Date'];
};

export enum MealTrackStatus {
  Skipped = 'SKIPPED',
  Ate = 'ATE',
  OtherFollowing = 'OTHER_FOLLOWING',
  OtherNotFollowing = 'OTHER_NOT_FOLLOWING'
}

export enum MealType {
  Recipe = 'RECIPE',
  MenuItem = 'MENU_ITEM',
  UsdaMeal = 'USDA_MEAL',
  OwnRecipe = 'OWN_RECIPE',
  OwnItem = 'OWN_ITEM',
  Openfoodfact = 'OPENFOODFACT'
}

export type MenuItem = Node & {
  __typename?: 'MenuItem';
  id: Scalars['ID'];
  databaseId?: Maybe<Scalars['String']>;
  restaurantId?: Maybe<Scalars['String']>;
  restaurantName?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  indexedAt?: Maybe<Scalars['DateTime']>;
  menu?: Maybe<Scalars['String']>;
  sectionName?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  minPrice?: Maybe<Scalars['Float']>;
  maxPrice?: Maybe<Scalars['Float']>;
  portionSize?: Maybe<Scalars['String']>;
  isAnnotated?: Maybe<Scalars['Boolean']>;
  isIndexed?: Maybe<Scalars['Boolean']>;
  isValidated?: Maybe<Scalars['Boolean']>;
  trustMe?: Maybe<Scalars['Boolean']>;
  deciderSource?: Maybe<Scalars['String']>;
  deciderVersion?: Maybe<Scalars['Int']>;
  language?: Maybe<Scalars['String']>;
  /** @deprecated use `courses` a menu item can have more than one course */
  course?: Maybe<Scalars['String']>;
  ingredients?: Maybe<Array<Maybe<Ingredient>>>;
  mayHave?: Maybe<Array<Maybe<Ingredient>>>;
  programs?: Maybe<Array<Maybe<Scalars['String']>>>;
  programsIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  confirmedIngredients?: Maybe<Array<Maybe<Scalars['String']>>>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  isSourceActive?: Maybe<Scalars['Boolean']>;
  annotation?: Maybe<Scalars['GenericScalar']>;
  parent?: Maybe<Scalars['String']>;
  mealTags?: Maybe<Array<Maybe<Scalars['String']>>>;
  usersFavorite?: Maybe<Array<Maybe<Scalars['String']>>>;
  favoritesCount?: Maybe<Scalars['Int']>;
  isUserFavorite?: Maybe<Scalars['Boolean']>;
  /** @deprecated use `nutritional_info` */
  nutrients?: Maybe<Nutrients>;
  type?: Maybe<Scalars['String']>;
  courses?: Maybe<Array<Maybe<Scalars['String']>>>;
  programScore?: Maybe<Scalars['Float']>;
  nutritionalInfo?: Maybe<NutritionalInfo>;
  hasNutrients?: Maybe<Scalars['Boolean']>;
  adherence?: Maybe<Adherence>;
  isRecommended?: Maybe<Scalars['Boolean']>;
  restaurant?: Maybe<Restaurant>;
};

export type MenuItemConnection = {
  __typename?: 'MenuItemConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<MenuItemEdge>>;
};

export type MenuItemEdge = {
  __typename?: 'MenuItemEdge';
  node?: Maybe<MenuItem>;
  cursor: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createGooglePlayTransaction?: Maybe<CreateGooglePlayTransaction>;
  updateSubscription?: Maybe<UpdateSubscription>;
  updateJourneyStatus?: Maybe<UpdateJourneyStatus>;
  toggleTaskCompleted?: Maybe<ToggleTaskCompleted>;
  sendFeedback?: Maybe<SendFeedback>;
  createUser?: Maybe<CreateUser>;
  generateMealPlan?: Maybe<GenerateMealPlan>;
  generateSimpleMealPlan?: Maybe<GenerateSimpleMealPlan>;
  startOverMealPlan?: Maybe<StartOverMealPlan>;
  swapMealPlanRecipe?: Maybe<SwapMealPlanRecipe>;
  changeMealPlannerDayMeal?: Maybe<ChangeMealPlannerDayMeal>;
  addToShoppingList?: Maybe<AddToShoppingList>;
  addRecipesToShoppingList?: Maybe<AddRecipesToShoppingList>;
  removeFromShoppingList?: Maybe<RemoveFromShoppingList>;
  toggleShoppingListItem?: Maybe<ToggleShoppingListItem>;
  clearShoppingList?: Maybe<ClearShoppingList>;
  clearShoppingListCheckedItems?: Maybe<ClearShoppingListCheckedItems>;
  updateShoppingListRecipeServings?: Maybe<UpdateShoppingListRecipeServings>;
  purchaseMealRecipe?: Maybe<PurchaseMealRecipe>;
  waterLog?: Maybe<WaterLogMutation>;
  profileLog?: Maybe<ProfileLogMutation>;
  createMealLog?: Maybe<CreateMealLogMutation>;
  updateMealLog?: Maybe<UpdateMealLogMutation>;
  removeMealLog?: Maybe<RemoveMealLogMutation>;
  createOwnMealLog?: Maybe<CreateOwnMealLogMutation>;
  updateOwnMeal?: Maybe<UpdateOwnMealMutation>;
  removeOwnMeal?: Maybe<RemoveOwnMeal>;
  createOwnRecipe?: Maybe<CreateOwnRecipe>;
  updateOwnRecipe?: Maybe<UpdateOwnRecipe>;
  profileMacroGoalsSettings?: Maybe<ProfileMacroGoalsSettings>;
  profileRestrictionsUpdate?: Maybe<ProfileRestrictionsUpdate>;
  deleteMyProfile?: Maybe<HardDeleteMyProfileMutation>;
  profileMealPlanSettings?: Maybe<ProfileMealPlanSettings>;
  createProfileBiomarkers?: Maybe<CreateProfileBiomarkers>;
  updateProfileBiomarkers?: Maybe<UpdateProfileBiomarkers>;
  updateProfile?: Maybe<UpdateProfile>;
  createProfileCustomAttributes?: Maybe<CreateProfileCustomAttributes>;
  sensitiveProfileAttributes?: Maybe<SensitiveProfileAttributes>;
  userFavoriteRestaurant?: Maybe<UserFavoriteRestaurant>;
  userFavoriteMenuitem?: Maybe<UserFavoriteMenuItem>;
  userFavoriteRecipe?: Maybe<UserFavoriteRecipe>;
  updateUserProgram?: Maybe<UpdateUserProgram>;
  createQuizResult?: Maybe<CreateQuizResult>;
  createDailyRecapEntry?: Maybe<CreateDailyRecapEntry>;
  createWeightEntry?: Maybe<CreateWeightEntry>;
  updateHydration?: Maybe<UpdateHydration>;
  createMealEntry?: Maybe<CreateMealEntry>;
};


export type MutationCreateGooglePlayTransactionArgs = {
  acknowledged: Scalars['Boolean'];
  autoRenewing: Scalars['Boolean'];
  orderId: Scalars['String'];
  packageName: Scalars['String'];
  productId: Scalars['String'];
  purchaseState: Scalars['Int'];
  purchaseTime: Scalars['Float'];
  purchaseToken: Scalars['String'];
  subscriptionSku: Scalars['String'];
};


export type MutationUpdateSubscriptionArgs = {
  profileId?: Maybe<Scalars['String']>;
  subscriptionId: Scalars['String'];
  userId?: Maybe<Scalars['String']>;
};


export type MutationUpdateJourneyStatusArgs = {
  journeyId: Scalars['String'];
  status: JourneyStatus;
};


export type MutationToggleTaskCompletedArgs = {
  keysHash: Scalars['String'];
};


export type MutationSendFeedbackArgs = {
  message: Scalars['String'];
  subject: Scalars['String'];
};


export type MutationCreateUserArgs = {
  email?: Maybe<Scalars['String']>;
  emailPasswordNotification?: Maybe<Scalars['Boolean']>;
  extraData?: Maybe<Scalars['JSONString']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  program?: Maybe<Scalars['String']>;
  restrictions?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type MutationGenerateMealPlanArgs = {
  addDays?: Maybe<Scalars['Boolean']>;
  breakfastDistribution?: Maybe<Scalars['Float']>;
  dinnerDistribution?: Maybe<Scalars['Float']>;
  ignoreLock?: Maybe<Scalars['Boolean']>;
  isCache?: Maybe<Scalars['Boolean']>;
  kcalLimit?: Maybe<Scalars['Float']>;
  lunchDistribution?: Maybe<Scalars['Float']>;
  maxNumOfServings?: Maybe<Scalars['Int']>;
  maxServingWeight?: Maybe<Scalars['Int']>;
  minServingWeight?: Maybe<Scalars['Int']>;
  repeat?: Maybe<Scalars['DateTime']>;
  snackDistribution?: Maybe<Scalars['Float']>;
};


export type MutationGenerateSimpleMealPlanArgs = {
  addDays?: Maybe<Scalars['Boolean']>;
  ignoreLock?: Maybe<Scalars['Boolean']>;
  repeat?: Maybe<Scalars['DateTime']>;
};


export type MutationSwapMealPlanRecipeArgs = {
  mealId?: Maybe<Scalars['String']>;
  mealTag?: Maybe<MealTime>;
  recipeId: Scalars['String'];
  serving?: Maybe<Scalars['Int']>;
};


export type MutationChangeMealPlannerDayMealArgs = {
  day: Scalars['Int'];
  mealTime: MealTime;
  recipeId: Scalars['String'];
};


export type MutationAddToShoppingListArgs = {
  recipeId: Scalars['String'];
};


export type MutationAddRecipesToShoppingListArgs = {
  recipeIds: Array<Maybe<Scalars['String']>>;
};


export type MutationRemoveFromShoppingListArgs = {
  recipeId: Scalars['String'];
};


export type MutationToggleShoppingListItemArgs = {
  isAggregate: Scalars['Boolean'];
  itemId: Scalars['String'];
};


export type MutationUpdateShoppingListRecipeServingsArgs = {
  numberOfServings: Scalars['Int'];
  recipeId: Scalars['String'];
};


export type MutationPurchaseMealRecipeArgs = {
  externalId?: Maybe<Scalars['String']>;
  profileId: Scalars['String'];
  recipeId: Scalars['ID'];
};


export type MutationWaterLogArgs = {
  date?: Maybe<Scalars['Date']>;
  operation: Operation;
};


export type MutationProfileLogArgs = {
  date?: Maybe<Scalars['Date']>;
  kind: Kind;
  level: Level;
};


export type MutationCreateMealLogArgs = {
  customServingEquivalent?: Maybe<Scalars['Float']>;
  date?: Maybe<Scalars['Date']>;
  mealDatabaseId: Scalars['String'];
  mealTime: MealTime;
  mealType: MealType;
  quantity: Scalars['Float'];
  serving?: Maybe<Scalars['Float']>;
  time?: Maybe<Scalars['Time']>;
};


export type MutationUpdateMealLogArgs = {
  customServingEquivalent?: Maybe<Scalars['Float']>;
  databaseId: Scalars['String'];
  date?: Maybe<Scalars['Date']>;
  mealTime?: Maybe<MealTime>;
  quantity?: Maybe<Scalars['Float']>;
  serving?: Maybe<Scalars['Float']>;
  time?: Maybe<Scalars['Time']>;
};


export type MutationRemoveMealLogArgs = {
  databaseId: Scalars['String'];
};


export type MutationCreateOwnMealLogArgs = {
  barcode?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  logAfterCreation?: Maybe<Scalars['Boolean']>;
  mealTime: MealTime;
  mealType: MealType;
  name: Scalars['String'];
  ownNutrients: OwnNutrients;
  ownServing: OwnServing;
};


export type MutationUpdateOwnMealArgs = {
  barcode?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  databaseId: Scalars['String'];
  date?: Maybe<Scalars['Date']>;
  mealTime?: Maybe<MealTime>;
  mealType?: Maybe<MealType>;
  name?: Maybe<Scalars['String']>;
  ownNutrients: OwnNutrients;
  ownServing: OwnServing;
};


export type MutationRemoveOwnMealArgs = {
  databaseId: Scalars['String'];
};


export type MutationCreateOwnRecipeArgs = {
  ingredients?: Maybe<Array<Maybe<OwnRecipeIngredient>>>;
  logAfterCreation?: Maybe<Scalars['Boolean']>;
  quantity: Scalars['Float'];
  recipeName: Scalars['String'];
};


export type MutationUpdateOwnRecipeArgs = {
  databaseId: Scalars['String'];
  ingredients?: Maybe<Array<Maybe<OwnRecipeIngredient>>>;
  quantity?: Maybe<Scalars['Float']>;
  recipeName?: Maybe<Scalars['String']>;
};


export type MutationProfileMacroGoalsSettingsArgs = {
  activityLevel: ActivityLevel;
  biologicalSex: BiologicalSex;
  birthdate: Scalars['Date'];
  goalsOn: Scalars['Boolean'];
  height: Scalars['Float'];
  isImperial?: Maybe<Scalars['Boolean']>;
  startingWeight: Scalars['Float'];
  targetWeight: Scalars['Float'];
  weeklyWeightGoal: WeeklyWeightGoal;
};


export type MutationProfileRestrictionsUpdateArgs = {
  restrictions?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type MutationProfileMealPlanSettingsArgs = {
  calories: Scalars['Int'];
  carbsPerc: Scalars['Float'];
  error: Scalars['Float'];
  fatPerc: Scalars['Float'];
  format?: Maybe<Array<Maybe<MealTime>>>;
  omega3Perc?: Maybe<Scalars['Float']>;
  proteinPerc: Scalars['Float'];
};


export type MutationCreateProfileBiomarkersArgs = {
  cholesterolLdl?: Maybe<Scalars['Float']>;
  cortisol?: Maybe<Scalars['Float']>;
  ferritin?: Maybe<Scalars['Float']>;
  hba1c?: Maybe<Scalars['Float']>;
  totalCholesterol?: Maybe<Scalars['Float']>;
  vitaminB12?: Maybe<Scalars['Float']>;
  vitaminD?: Maybe<Scalars['Float']>;
};


export type MutationUpdateProfileBiomarkersArgs = {
  cholesterolLdl?: Maybe<Scalars['Float']>;
  cortisol?: Maybe<Scalars['Float']>;
  ferritin?: Maybe<Scalars['Float']>;
  hba1c?: Maybe<Scalars['Float']>;
  totalCholesterol?: Maybe<Scalars['Float']>;
  vitaminB12?: Maybe<Scalars['Float']>;
  vitaminD?: Maybe<Scalars['Float']>;
};


export type MutationUpdateProfileArgs = {
  isImperial?: Maybe<Scalars['Boolean']>;
  timezone?: Maybe<Scalars['String']>;
};


export type MutationCreateProfileCustomAttributesArgs = {
  attributes?: Maybe<Array<Maybe<ProfileCustomAttribute>>>;
};


export type MutationSensitiveProfileAttributesArgs = {
  attributes?: Maybe<Scalars['String']>;
  signingPublicKey?: Maybe<Scalars['String']>;
};


export type MutationUserFavoriteRestaurantArgs = {
  restaurantId: Scalars['String'];
};


export type MutationUserFavoriteMenuitemArgs = {
  menuitemId: Scalars['String'];
};


export type MutationUserFavoriteRecipeArgs = {
  recipeId: Scalars['String'];
};


export type MutationUpdateUserProgramArgs = {
  programId: Scalars['String'];
};


export type MutationCreateQuizResultArgs = {
  answers: Array<Maybe<Scalars['String']>>;
  result: Scalars['String'];
};


export type MutationCreateDailyRecapEntryArgs = {
  date: Scalars['Date'];
  questionId: Scalars['String'];
  answerId: Scalars['String'];
};


export type MutationCreateWeightEntryArgs = {
  date: Scalars['Date'];
  value: Scalars['Float'];
};


export type MutationUpdateHydrationArgs = {
  date: Scalars['Date'];
  action: Actiontype;
};


export type MutationCreateMealEntryArgs = {
  mealId: Scalars['ID'];
  value?: Maybe<MealTrackStatus>;
};

export type Node = {
  id: Scalars['ID'];
};

export type Nutrient = {
  __typename?: 'Nutrient';
  name?: Maybe<Scalars['String']>;
  tagname?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type Nutrients = {
  __typename?: 'Nutrients';
  chocdf?: Maybe<Scalars['Float']>;
  fat?: Maybe<Scalars['Float']>;
  sugar?: Maybe<Scalars['Float']>;
  procnt?: Maybe<Scalars['Float']>;
  fibtg?: Maybe<Scalars['Float']>;
  netcarbs?: Maybe<Scalars['Float']>;
};

export type NutrientsFull = {
  __typename?: 'NutrientsFull';
  energy?: Maybe<Scalars['Float']>;
  fiber?: Maybe<Scalars['Float']>;
  saturatedFat?: Maybe<Scalars['Float']>;
  transFats?: Maybe<Scalars['Float']>;
  cholesterol?: Maybe<Scalars['Float']>;
  sodiumNa?: Maybe<Scalars['Float']>;
  potassiumK?: Maybe<Scalars['Float']>;
  enercKcal?: Maybe<Scalars['Float']>;
  fasat?: Maybe<Scalars['Float']>;
  fams?: Maybe<Scalars['Float']>;
  fapu?: Maybe<Scalars['Float']>;
  fatrn?: Maybe<Scalars['Float']>;
  chole?: Maybe<Scalars['Float']>;
  na?: Maybe<Scalars['Float']>;
  k?: Maybe<Scalars['Float']>;
  vitaIu?: Maybe<Scalars['Float']>;
  vitc?: Maybe<Scalars['Float']>;
  ca?: Maybe<Scalars['Float']>;
  fe?: Maybe<Scalars['Float']>;
};

export type NutrientsPerServing = {
  __typename?: 'NutrientsPerServing';
  calories?: Maybe<Scalars['Float']>;
  sugar?: Maybe<Scalars['Float']>;
  fiber?: Maybe<Scalars['Float']>;
  saturatedFat?: Maybe<Scalars['Float']>;
  monounsaturatedFat?: Maybe<Scalars['Float']>;
  polyunsaturatedFat?: Maybe<Scalars['Float']>;
  transFat?: Maybe<Scalars['Float']>;
  cholesterol?: Maybe<Scalars['Float']>;
  sodium?: Maybe<Scalars['Float']>;
  potassium?: Maybe<Scalars['Float']>;
  vitaminA?: Maybe<Scalars['Float']>;
  vitaminC?: Maybe<Scalars['Float']>;
  vitaminB6?: Maybe<Scalars['Float']>;
  vitaminB12?: Maybe<Scalars['Float']>;
  vitaminD?: Maybe<Scalars['Float']>;
  vitaminE?: Maybe<Scalars['Float']>;
  calcium?: Maybe<Scalars['Float']>;
  iron?: Maybe<Scalars['Float']>;
  netcarbs?: Maybe<Scalars['Float']>;
  protein?: Maybe<Scalars['Float']>;
  carbs?: Maybe<Scalars['Float']>;
  fat?: Maybe<Scalars['Float']>;
  dha?: Maybe<Scalars['Float']>;
  dpa?: Maybe<Scalars['Float']>;
  epa?: Maybe<Scalars['Float']>;
  ala?: Maybe<Scalars['Float']>;
  omega3?: Maybe<Scalars['Float']>;
};

export type NutritionEstimates = {
  __typename?: 'NutritionEstimates';
  protein?: Maybe<Scalars['Float']>;
  carbs?: Maybe<Scalars['Float']>;
  fat?: Maybe<Scalars['Float']>;
  calories?: Maybe<Scalars['Float']>;
};

export type NutritionalInfo = {
  __typename?: 'NutritionalInfo';
  calories?: Maybe<Scalars['Float']>;
  protein?: Maybe<Scalars['Float']>;
  carbs?: Maybe<Scalars['Float']>;
  fat?: Maybe<Scalars['Float']>;
  dha?: Maybe<Scalars['Float']>;
  dpa?: Maybe<Scalars['Float']>;
  epa?: Maybe<Scalars['Float']>;
  ala?: Maybe<Scalars['Float']>;
  sugar?: Maybe<Scalars['Float']>;
  fiber?: Maybe<Scalars['Float']>;
  saturatedFat?: Maybe<Scalars['Float']>;
  monounsaturatedFat?: Maybe<Scalars['Float']>;
  polyunsaturatedFat?: Maybe<Scalars['Float']>;
  transFat?: Maybe<Scalars['Float']>;
  cholesterol?: Maybe<Scalars['Float']>;
  sodium?: Maybe<Scalars['Float']>;
  potassium?: Maybe<Scalars['Float']>;
  vitaminA?: Maybe<Scalars['Float']>;
  vitaminC?: Maybe<Scalars['Float']>;
  vitaminB6?: Maybe<Scalars['Float']>;
  vitaminB12?: Maybe<Scalars['Float']>;
  vitaminD?: Maybe<Scalars['Float']>;
  vitaminE?: Maybe<Scalars['Float']>;
  calcium?: Maybe<Scalars['Float']>;
  iron?: Maybe<Scalars['Float']>;
  netcarbs?: Maybe<Scalars['Float']>;
  omega3?: Maybe<Scalars['Float']>;
};

export enum Operation {
  Add = 'ADD',
  Substract = 'SUBSTRACT'
}

export type OutoCompleteConnection = {
  __typename?: 'OutoCompleteConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<OutoCompleteEdge>>;
};

export type OutoCompleteEdge = {
  __typename?: 'OutoCompleteEdge';
  node?: Maybe<Suggestion>;
  cursor: Scalars['String'];
};

export type OwnNutrients = {
  enercKcal?: Maybe<Scalars['Float']>;
  procnt: Scalars['Float'];
  chocdf: Scalars['Float'];
  fat: Scalars['Float'];
  sugar?: Maybe<Scalars['Float']>;
  fibtg?: Maybe<Scalars['Float']>;
  fasat?: Maybe<Scalars['Float']>;
  fams?: Maybe<Scalars['Float']>;
  fapu?: Maybe<Scalars['Float']>;
  fatrn?: Maybe<Scalars['Float']>;
  chole?: Maybe<Scalars['Float']>;
  na?: Maybe<Scalars['Float']>;
  k?: Maybe<Scalars['Float']>;
  vitaIu?: Maybe<Scalars['Float']>;
  vitc?: Maybe<Scalars['Float']>;
  ca?: Maybe<Scalars['Float']>;
  fe?: Maybe<Scalars['Float']>;
};

export type OwnRecipeIngredient = {
  id: Scalars['String'];
  mealType: MealType;
  quantity: Scalars['Float'];
  serving: Scalars['Int'];
};

export type OwnServing = {
  name: Scalars['String'];
  equivalent: Scalars['Float'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
  endCursor?: Maybe<Scalars['String']>;
};

export type Portion = {
  __typename?: 'Portion';
  modifier?: Maybe<Scalars['String']>;
  seqNum?: Maybe<Scalars['Int']>;
  amount?: Maybe<Scalars['Float']>;
  gramWeight?: Maybe<Scalars['Float']>;
  unit?: Maybe<Scalars['String']>;
};

export enum PriceRate {
  Rate_0 = 'RATE_0',
  Rate_1 = 'RATE_1',
  Rate_2 = 'RATE_2',
  Rate_3 = 'RATE_3',
  Rate_4 = 'RATE_4'
}

export enum ProfileBiologicalSex {
  Male = 'MALE',
  Female = 'FEMALE'
}

export type ProfileBiomarkers = {
  __typename?: 'ProfileBiomarkers';
  profile: ProfileType;
  hba1c?: Maybe<Scalars['Float']>;
  totalCholesterol?: Maybe<Scalars['Float']>;
  cholesterolLdl?: Maybe<Scalars['Float']>;
  vitaminD?: Maybe<Scalars['Float']>;
  vitaminB12?: Maybe<Scalars['Float']>;
  cortisol?: Maybe<Scalars['Float']>;
  ferritin?: Maybe<Scalars['Float']>;
  updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
};

export type ProfileCustomAttribute = {
  name: Scalars['String'];
  dataType: AttrDataType;
  value: Scalars['GenericScalar'];
};

export type ProfileLog = {
  __typename?: 'ProfileLog';
  sleep?: Maybe<Scalars['String']>;
  mood?: Maybe<Scalars['String']>;
  water?: Maybe<Scalars['Int']>;
};

export type ProfileLogMutation = {
  __typename?: 'ProfileLogMutation';
  success?: Maybe<Scalars['Boolean']>;
};

export type ProfileMacroGoalsSettings = {
  __typename?: 'ProfileMacroGoalsSettings';
  success?: Maybe<Scalars['Boolean']>;
  bmr?: Maybe<Scalars['Int']>;
  tdee?: Maybe<Scalars['Int']>;
  cd?: Maybe<Scalars['Int']>;
  dcig?: Maybe<Scalars['Int']>;
  profile?: Maybe<ProfileType>;
};

export type ProfileMealPlanSettings = {
  __typename?: 'ProfileMealPlanSettings';
  success?: Maybe<Scalars['Boolean']>;
};

export type ProfileRecommendationType = {
  __typename?: 'ProfileRecommendationType';
  id: Scalars['UUID'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  profile: ProfileType;
  recommendation?: Maybe<RecommendationCatalogType>;
  databaseId?: Maybe<Scalars['String']>;
};

export type ProfileRestrictionsUpdate = {
  __typename?: 'ProfileRestrictionsUpdate';
  success?: Maybe<Scalars['Boolean']>;
};

export type ProfileType = {
  __typename?: 'ProfileType';
  id: Scalars['UUID'];
  appVersion: Scalars['Float'];
  gender?: Maybe<Scalars['String']>;
  biologicalSex?: Maybe<ProfileBiologicalSex>;
  startingWeight?: Maybe<Scalars['Float']>;
  targetWeight?: Maybe<Scalars['Float']>;
  activityLevel?: Maybe<ActivityLevel>;
  weeklyWeightGoal?: Maybe<WeeklyWeightGoal>;
  goalsOn: Scalars['Boolean'];
  birthdate?: Maybe<Scalars['Date']>;
  ethnicity?: Maybe<Scalars['UUID']>;
  programName?: Maybe<Scalars['String']>;
  timezone: Scalars['String'];
  goal?: Maybe<Scalars['UUID']>;
  goals: Array<Maybe<Scalars['String']>>;
  lat?: Maybe<Scalars['String']>;
  lon?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  hasNotifications?: Maybe<Scalars['Boolean']>;
  weight?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  bodyMassIndex?: Maybe<Scalars['Float']>;
  age?: Maybe<Scalars['Int']>;
  bloodPressureSystolic?: Maybe<Scalars['Float']>;
  bloodPressureDiastolic?: Maybe<Scalars['Float']>;
  restrictions?: Maybe<Array<Maybe<Restriction>>>;
  cpcs: Array<Maybe<Scalars['UUID']>>;
  snps: Array<Maybe<Scalars['UUID']>>;
  adherenceScore: Scalars['Float'];
  country?: Maybe<Scalars['UUID']>;
  clickId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  glucoseLevel?: Maybe<Scalars['Float']>;
  isTesting: Scalars['Boolean'];
  needsNewPassword: Scalars['Boolean'];
  hasOnboarded: Scalars['Boolean'];
  extraData?: Maybe<Scalars['JSONString']>;
  isImperial: Scalars['Boolean'];
  customAttributes?: Maybe<Scalars['JSONString']>;
  encodedAttributes?: Maybe<Scalars['String']>;
  encodedAttributesJwk?: Maybe<Scalars['String']>;
  mpCalories?: Maybe<Scalars['Int']>;
  mpCarbsPerc?: Maybe<Scalars['Float']>;
  mpProteinPerc?: Maybe<Scalars['Float']>;
  mpFatPerc?: Maybe<Scalars['Float']>;
  mpSaturatedFatPerc?: Maybe<Scalars['Float']>;
  mpMonounsaturatedFatPerc?: Maybe<Scalars['Float']>;
  mpPolyunsaturatedFatPerc?: Maybe<Scalars['Float']>;
  mpTransFatPerc?: Maybe<Scalars['Float']>;
  mpOmega3Perc?: Maybe<Scalars['Float']>;
  mpDays?: Maybe<Scalars['Int']>;
  mpError?: Maybe<Scalars['Float']>;
  mpFormat: Array<Maybe<Scalars['String']>>;
  biomarkers?: Maybe<ProfileBiomarkers>;
  profilerecommendationSet?: Maybe<Array<Maybe<ProfileRecommendationType>>>;
  dashboardprofileSet?: Maybe<JourneyProfileTypeConnection>;
  googleplaytransactionSet?: Maybe<GooglePlayTransactionTypeConnection>;
  aggregateSet?: Maybe<AggregateConnection>;
  listitemSet?: Maybe<ListItemConnection>;
  userId?: Maybe<Scalars['String']>;
  dailyCaloricIntakeGoal?: Maybe<Scalars['Int']>;
  caloricDifference?: Maybe<Scalars['Int']>;
  totalDailyEnergyExpenditure?: Maybe<Scalars['Int']>;
  basalMetabolicRate?: Maybe<Scalars['Int']>;
  program?: Maybe<Program>;
  isPremium?: Maybe<Scalars['Boolean']>;
  subscription?: Maybe<SubscriptionType>;
};


export type ProfileTypeDashboardprofileSetArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['UUID']>;
};


export type ProfileTypeGoogleplaytransactionSetArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['UUID']>;
};


export type ProfileTypeAggregateSetArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['UUID']>;
};


export type ProfileTypeListitemSetArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  recipe?: Maybe<Scalars['ID']>;
};

export type Program = Node & {
  __typename?: 'Program';
  id: Scalars['ID'];
  order: Scalars['Int'];
  visibility: Scalars['Boolean'];
  name: Scalars['String'];
  slug?: Maybe<Scalars['String']>;
  storeUrl?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  blacklists?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  comment: Scalars['String'];
  tags: Array<Maybe<Scalars['String']>>;
  isActive: Scalars['Boolean'];
  authors?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  price: Scalars['Float'];
  isPremium: Scalars['Boolean'];
  descriptionShort?: Maybe<Scalars['String']>;
  descriptionLong?: Maybe<Scalars['String']>;
  defaultVideoThumnail?: Maybe<Scalars['String']>;
  showDefaultGoals: Scalars['Boolean'];
  image?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  lowerBound: Scalars['Float'];
  upperBound: Scalars['Float'];
  increaseDelta: Scalars['Float'];
  decreaseDelta: Scalars['Float'];
  normalizingTemperature: Scalars['Float'];
  books?: Maybe<Scalars['JSONString']>;
  emailCampaignId?: Maybe<Scalars['String']>;
  mailchimpWorkflowEmailId?: Maybe<Scalars['String']>;
  dynamicProgramParent?: Maybe<Program>;
  restrictions: Array<Maybe<Scalars['UUID']>>;
  backgroundImage?: Maybe<Scalars['String']>;
  programSet?: Maybe<ProgramConnection>;
  dashboardSet?: Maybe<Array<Maybe<JourneyType>>>;
  daymealSet?: Maybe<DayMealConnection>;
  databaseId?: Maybe<Scalars['String']>;
  authorAvatar?: Maybe<Scalars['String']>;
  cpcsIngredientGroups?: Maybe<CpcIngredientGroup>;
  experience?: Maybe<QuizInfo>;
  health?: Maybe<QuizInfo>;
  preferences?: Maybe<QuizInfo>;
};


export type ProgramProgramSetArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
  isPremium?: Maybe<Scalars['Boolean']>;
};


export type ProgramDaymealSetArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  recipe?: Maybe<Scalars['ID']>;
};

export type ProgramConnection = {
  __typename?: 'ProgramConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<ProgramEdge>>;
};

export type ProgramEdge = {
  __typename?: 'ProgramEdge';
  node?: Maybe<Program>;
  cursor: Scalars['String'];
};

export type PurchaseMealRecipe = {
  __typename?: 'PurchaseMealRecipe';
  success?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  subscriptions?: Maybe<SubscriptionTypeConnection>;
  googleTransaction?: Maybe<GooglePlayTransactionTypeConnection>;
  featureLimitations: Array<AppRestriction>;
  currentJourneys?: Maybe<JourneyProfileTypeConnection>;
  contentLibrary?: Maybe<ContentLibraryTypeConnection>;
  contentCategories?: Maybe<ContentCategoryTypeConnection>;
  mealPlannerByDay?: Maybe<MealPlannerDays>;
  mealPlannerByCustomFormat?: Maybe<MealCustomPlannerDays>;
  mealPlan?: Maybe<Array<Maybe<MealPlanDay>>>;
  customMealPlan?: Maybe<Array<Maybe<MealPlanDay>>>;
  isUserProgramStarted?: Maybe<Scalars['Boolean']>;
  suggestedMeals?: Maybe<SuggestedMeals>;
  suggestMeal?: Maybe<SuggestedMeal>;
  /** @deprecated Deprecating soon. */
  outocomplete?: Maybe<OutoCompleteConnection>;
  autocomplete?: Maybe<OutoCompleteConnection>;
  locationAutocomplete?: Maybe<Array<Maybe<LocationAutocomplete>>>;
  usdaFoodByNdbNumber?: Maybe<UsdaFood>;
  shoppingList?: Maybe<ListItemConnection>;
  shoppingListAggregate?: Maybe<AggregateConnection>;
  shoppingListBadge?: Maybe<Scalars['Boolean']>;
  serchForAllowedIngredient?: Maybe<Array<Maybe<CpcIngredient>>>;
  allIngredients?: Maybe<Array<Maybe<Scalars['String']>>>;
  ingredientSearch?: Maybe<IngredientSearchResultConnection>;
  profileLog?: Maybe<ProfileLog>;
  searchProfile?: Maybe<ProfileType>;
  mealLog?: Maybe<MealLogConnection>;
  recentMealLogs?: Maybe<Array<Maybe<MealLog>>>;
  frequentMealLogs?: Maybe<Array<Maybe<MealLog>>>;
  ownMealLogs?: Maybe<Array<Maybe<MealLog>>>;
  ownFoodItems?: Maybe<MealLogConnection>;
  mealLogMacroAggs?: Maybe<MealLogMacroAggs>;
  ownMealLog?: Maybe<MealLog>;
  ownFoodItem?: Maybe<MealLog>;
  ownRecipes?: Maybe<MealLogConnection>;
  ownRecipe?: Maybe<MealLog>;
  barcodeSearch?: Maybe<FoodProduct>;
  macroGoals?: Maybe<MacroGoals>;
  myProfile?: Maybe<ProfileType>;
  profileRecommendations?: Maybe<Array<Maybe<ProfileRecommendationType>>>;
  foodLog?: Maybe<MealLog>;
  foodLogsByUser?: Maybe<MealLogConnection>;
  log?: Maybe<Logger>;
  logs?: Maybe<LoggerConnection>;
  recipe?: Maybe<Recipe>;
  recipeSearch?: Maybe<RecipeConnection>;
  recipeMealTags?: Maybe<Array<Maybe<Scalars['String']>>>;
  recipeTags?: Maybe<Array<Maybe<Scalars['String']>>>;
  myFavoriteRecipes?: Maybe<RecipeConnection>;
  similarMacrosRecipes?: Maybe<Array<Maybe<Recipe>>>;
  recipeSwapOptions?: Maybe<RecipeSwapOptions>;
  recommendedSwaps?: Maybe<RecommendedSwaps>;
  featuredRecipesByProgram?: Maybe<Array<Maybe<Recipe>>>;
  searchRecipeByNameOrIngredient?: Maybe<RecipeSearchResult>;
  searchRecipesByIngredients?: Maybe<RecipeConnection>;
  premiumProgramRecipes?: Maybe<RecipeConnection>;
  popularRecipes?: Maybe<RecipeConnection>;
  trendingRecipes?: Maybe<RecipeConnection>;
  recipesByMealTime?: Maybe<RecipeConnection>;
  recipesByTag?: Maybe<RecipeConnection>;
  restaurant?: Maybe<Restaurant>;
  restaurantSearch?: Maybe<RestaurantConnection>;
  menuitems?: Maybe<Array<Maybe<MenuItem>>>;
  menuitem?: Maybe<MenuItem>;
  menuitemByProgram?: Maybe<MenuItem>;
  menuitemsByProgram?: Maybe<Array<Maybe<MenuItem>>>;
  menuitemSearch?: Maybe<MenuItemConnection>;
  menuitemMealTags?: Maybe<Array<Maybe<Scalars['String']>>>;
  menuitemTags?: Maybe<Array<Maybe<Scalars['String']>>>;
  myFavoriteRestaurants?: Maybe<RestaurantConnection>;
  myFavoriteMenuitems?: Maybe<MenuItemConnection>;
  restaurantsByLocation?: Maybe<RestaurantConnection>;
  restaurantSearchByLocation?: Maybe<RestaurantSearchResult>;
  recommendedMenuitems?: Maybe<Array<Maybe<MenuItem>>>;
  restaurantAutocomplete?: Maybe<Array<Maybe<Restaurant>>>;
  restaurantRecommendedMenuitems?: Maybe<Array<Maybe<MenuItem>>>;
  onProgramPopularRestaurants?: Maybe<Array<Maybe<Restaurant>>>;
  program?: Maybe<Program>;
  programs?: Maybe<ProgramConnection>;
  quizPrograms?: Maybe<Array<Maybe<QuizProgram>>>;
  restriction?: Maybe<Restriction>;
  restrictions?: Maybe<RestrictionConnection>;
  dashboard?: Maybe<Dashboard>;
  dailyRecap: Array<DailyRecap>;
  streaks: Array<Streak>;
  weightTracker?: Maybe<WeightTracker>;
  hydration: Array<Hydration>;
  mealTracker: Array<Maybe<MealTrack>>;
};


export type QuerySubscriptionsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['UUID']>;
};


export type QueryGoogleTransactionArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['UUID']>;
};


export type QueryCurrentJourneysArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['UUID']>;
};


export type QueryContentLibraryArgs = {
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryContentCategoriesArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryMealPlannerByDayArgs = {
  mealPlannerQueryType: MealPlannerQueryType;
};


export type QueryMealPlannerByCustomFormatArgs = {
  format: Array<Maybe<MealTime>>;
};


export type QueryMealPlanArgs = {
  fromDate?: Maybe<Scalars['Date']>;
};


export type QueryCustomMealPlanArgs = {
  calories?: Maybe<Scalars['Int']>;
  protein?: Maybe<Scalars['Float']>;
  carbs?: Maybe<Scalars['Float']>;
  fat?: Maybe<Scalars['Float']>;
  omega3?: Maybe<Scalars['Float']>;
  days?: Maybe<Scalars['Int']>;
  error?: Maybe<Scalars['Float']>;
  format: Array<Maybe<MealTime>>;
  breakfastDistribution?: Maybe<Scalars['Float']>;
  lunchDistribution?: Maybe<Scalars['Float']>;
  dinnerDistribution?: Maybe<Scalars['Float']>;
  snackDistribution?: Maybe<Scalars['Float']>;
};


export type QuerySuggestedMealsArgs = {
  date: Scalars['Date'];
};


export type QuerySuggestMealArgs = {
  date: Scalars['Date'];
  mealTime: MealTime;
};


export type QueryOutocompleteArgs = {
  query?: Maybe<Scalars['String']>;
  mealType?: Maybe<MealType>;
  enter?: Maybe<Scalars['Boolean']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryAutocompleteArgs = {
  query?: Maybe<Scalars['String']>;
  mealType?: Maybe<MealType>;
  enter?: Maybe<Scalars['Boolean']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryLocationAutocompleteArgs = {
  query: Scalars['String'];
  lon: Scalars['Float'];
  lat: Scalars['Float'];
};


export type QueryUsdaFoodByNdbNumberArgs = {
  ndbNumber?: Maybe<Scalars['String']>;
};


export type QueryShoppingListArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  recipe?: Maybe<Scalars['ID']>;
};


export type QueryShoppingListAggregateArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['UUID']>;
};


export type QuerySerchForAllowedIngredientArgs = {
  ingredient: Scalars['String'];
};


export type QueryIngredientSearchArgs = {
  query?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryProfileLogArgs = {
  date?: Maybe<Scalars['Date']>;
};


export type QuerySearchProfileArgs = {
  email: Scalars['String'];
};


export type QueryMealLogArgs = {
  fromDate: Scalars['Date'];
  toDate: Scalars['Date'];
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryOwnFoodItemsArgs = {
  fromDate?: Maybe<Scalars['Date']>;
  toDate?: Maybe<Scalars['Date']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryMealLogMacroAggsArgs = {
  fromDate: Scalars['Date'];
  toDate: Scalars['Date'];
};


export type QueryOwnMealLogArgs = {
  id: Scalars['ID'];
};


export type QueryOwnFoodItemArgs = {
  id: Scalars['ID'];
};


export type QueryOwnRecipesArgs = {
  fromDate?: Maybe<Scalars['Date']>;
  toDate?: Maybe<Scalars['Date']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryOwnRecipeArgs = {
  id: Scalars['ID'];
};


export type QueryBarcodeSearchArgs = {
  barcode: Scalars['String'];
};


export type QueryMacroGoalsArgs = {
  date: Scalars['Date'];
};


export type QueryFoodLogArgs = {
  id: Scalars['ID'];
};


export type QueryFoodLogsByUserArgs = {
  fromDate: Scalars['Date'];
  toDate: Scalars['Date'];
  userId: Scalars['String'];
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryLogArgs = {
  id: Scalars['ID'];
};


export type QueryLogsArgs = {
  user?: Maybe<Scalars['String']>;
  sortBy?: Maybe<SortBy>;
  sortOrder?: Maybe<SortOrder>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryRecipeArgs = {
  id: Scalars['ID'];
};


export type QueryRecipeSearchArgs = {
  query?: Maybe<Scalars['String']>;
  maxPrepTime?: Maybe<Scalars['Int']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  meals?: Maybe<Array<Maybe<Scalars['String']>>>;
  cuisines?: Maybe<Array<Maybe<Scalars['String']>>>;
  isPremium?: Maybe<Scalars['Boolean']>;
  totalTime?: Maybe<Scalars['Float']>;
  skillLevel?: Maybe<SkillLevel>;
  dietaryTag?: Maybe<DietaryTag>;
  program?: Maybe<Scalars['String']>;
  ingredients?: Maybe<Array<Maybe<Scalars['String']>>>;
  macroNutrientsRange?: Maybe<MacroNutrientsRangeInput>;
  mealTime?: Maybe<RecipeMealTime>;
  numberOfIngredients?: Maybe<Scalars['Int']>;
  hasImage?: Maybe<Scalars['Boolean']>;
  hasInstructions?: Maybe<Scalars['Boolean']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryMyFavoriteRecipesArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QuerySimilarMacrosRecipesArgs = {
  recipeId?: Maybe<Scalars['String']>;
  serving?: Maybe<Scalars['Int']>;
};


export type QueryRecipeSwapOptionsArgs = {
  recipeId?: Maybe<Scalars['String']>;
  serving?: Maybe<Scalars['Int']>;
};


export type QueryRecommendedSwapsArgs = {
  mealTime?: Maybe<RecipeMealTime>;
};


export type QueryFeaturedRecipesByProgramArgs = {
  programId?: Maybe<Scalars['String']>;
};


export type QuerySearchRecipeByNameOrIngredientArgs = {
  query?: Maybe<Scalars['String']>;
};


export type QuerySearchRecipesByIngredientsArgs = {
  mustIngredients?: Maybe<Array<Maybe<Scalars['String']>>>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryPremiumProgramRecipesArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryPopularRecipesArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryTrendingRecipesArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryRecipesByMealTimeArgs = {
  mealTime?: Maybe<RecipeMealTime>;
  dietaryTags?: Maybe<Array<Maybe<DietaryTag>>>;
  maxPrepTime?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryRecipesByTagArgs = {
  tag?: Maybe<Scalars['String']>;
  dietaryTags?: Maybe<Array<Maybe<DietaryTag>>>;
  maxPrepTime?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryRestaurantArgs = {
  id: Scalars['ID'];
};


export type QueryRestaurantSearchArgs = {
  query?: Maybe<Scalars['String']>;
  distance?: Maybe<Scalars['Int']>;
  stateProvince?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  lon?: Maybe<Scalars['Float']>;
  lat?: Maybe<Scalars['Float']>;
  gotAr?: Maybe<Scalars['Boolean']>;
  priceRating?: Maybe<Array<Maybe<PriceRate>>>;
  meals?: Maybe<Array<Maybe<Scalars['String']>>>;
  geoBoundingBox?: Maybe<GeoBoundingBox>;
  cuisines?: Maybe<Array<Maybe<Scalars['String']>>>;
  isOpen?: Maybe<Scalars['Boolean']>;
  program?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryMenuitemsArgs = {
  restaurantId: Scalars['String'];
};


export type QueryMenuitemArgs = {
  id: Scalars['ID'];
};


export type QueryMenuitemByProgramArgs = {
  databaseId: Scalars['String'];
  programId: Scalars['String'];
};


export type QueryMenuitemsByProgramArgs = {
  restaurantId: Scalars['String'];
  programId: Scalars['String'];
};


export type QueryMenuitemSearchArgs = {
  query?: Maybe<Scalars['String']>;
  restaurantId?: Maybe<Scalars['String']>;
  course?: Maybe<Scalars['String']>;
  menu?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  meals?: Maybe<Array<Maybe<Scalars['String']>>>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryMyFavoriteRestaurantsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryMyFavoriteMenuitemsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryRestaurantsByLocationArgs = {
  lon?: Maybe<Scalars['Float']>;
  lat?: Maybe<Scalars['Float']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryRestaurantSearchByLocationArgs = {
  query?: Maybe<Scalars['String']>;
  cuisine?: Maybe<Scalars['String']>;
  lon: Scalars['Float'];
  lat: Scalars['Float'];
  geolon?: Maybe<Scalars['Float']>;
  geolat?: Maybe<Scalars['Float']>;
  geoBoundingBox?: Maybe<GeoBoundingBox>;
};


export type QueryRecommendedMenuitemsArgs = {
  lon: Scalars['Float'];
  lat: Scalars['Float'];
};


export type QueryRestaurantAutocompleteArgs = {
  query: Scalars['String'];
  lon: Scalars['Float'];
  lat: Scalars['Float'];
};


export type QueryRestaurantRecommendedMenuitemsArgs = {
  restaurantId: Scalars['String'];
};


export type QueryOnProgramPopularRestaurantsArgs = {
  lon: Scalars['Float'];
  lat: Scalars['Float'];
};


export type QueryProgramArgs = {
  id: Scalars['ID'];
};


export type QueryProgramsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
  isPremium?: Maybe<Scalars['Boolean']>;
};


export type QueryRestrictionArgs = {
  id: Scalars['ID'];
};


export type QueryRestrictionsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryDailyRecapArgs = {
  date: Scalars['Date'];
};


export type QueryStreaksArgs = {
  startDate: Scalars['Date'];
  endDate: Scalars['Date'];
};


export type QueryWeightTrackerArgs = {
  startDate: Scalars['Date'];
  endDate: Scalars['Date'];
};


export type QueryHydrationArgs = {
  startDate: Scalars['Date'];
  endDate: Scalars['Date'];
};


export type QueryMealTrackerArgs = {
  startDate: Scalars['Date'];
  endDate: Scalars['Date'];
};

export type QuizInfo = {
  __typename?: 'QuizInfo';
  isActive?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Scalars['String']>;
};

export type QuizProgram = {
  __typename?: 'QuizProgram';
  name?: Maybe<Scalars['String']>;
  programId?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  authorAvatar?: Maybe<Scalars['String']>;
  backgroundImage?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  isPremium?: Maybe<Scalars['String']>;
  experience?: Maybe<QuizInfo>;
  health?: Maybe<QuizInfo>;
  preferences?: Maybe<QuizInfo>;
};

export type Range = {
  gte: Scalars['Float'];
  lte: Scalars['Float'];
};

export type RawNutrientsFull = {
  __typename?: 'RawNutrientsFull';
  energy?: Maybe<Scalars['Float']>;
  fiber?: Maybe<Scalars['Float']>;
  saturatedFat?: Maybe<Scalars['Float']>;
  transFats?: Maybe<Scalars['Float']>;
  cholesterol?: Maybe<Scalars['Float']>;
  sodiumNa?: Maybe<Scalars['Float']>;
  potassiumK?: Maybe<Scalars['Float']>;
};

export type Recipe = Node & {
  __typename?: 'Recipe';
  id: Scalars['ID'];
  databaseId?: Maybe<Scalars['String']>;
  totalTime?: Maybe<Scalars['String']>;
  totalTimeInSeconds?: Maybe<Scalars['Int']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Int']>;
  numberOfServings?: Maybe<Scalars['Int']>;
  yieldText?: Maybe<Scalars['String']>;
  ingredientLines?: Maybe<Array<Maybe<Scalars['String']>>>;
  ingredients?: Maybe<Array<Maybe<Ingredient>>>;
  language?: Maybe<Scalars['String']>;
  /** @deprecated Use Source.recipeUrl instead */
  url?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  instructions?: Maybe<Array<Maybe<Scalars['String']>>>;
  recipeType?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  /** @deprecated Use courses instead */
  course?: Maybe<Scalars['String']>;
  courses?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** @deprecated Use cuisines instead */
  cuisine?: Maybe<Scalars['String']>;
  cuisines?: Maybe<Array<Maybe<Scalars['String']>>>;
  sgCuisines?: Maybe<Array<Maybe<Scalars['String']>>>;
  source?: Maybe<Source>;
  hasTrainableIngredients?: Maybe<Scalars['Boolean']>;
  /** @deprecated Use nutritionalInfo or nutrientsPerServing instead */
  nutritionEstimates?: Maybe<NutritionEstimates>;
  /** @deprecated Use nutritionalInfo or nutrientsPerServing instead */
  completeNutritionEstimates?: Maybe<Scalars['GenericScalar']>;
  mainImage?: Maybe<Scalars['String']>;
  squareImage?: Maybe<Scalars['String']>;
  /** @deprecated Use Source.recipeUrl instead */
  sourceUrl?: Maybe<Scalars['String']>;
  sgValidated?: Maybe<Scalars['Boolean']>;
  /** @deprecated Not used, will be removed */
  isIndexed?: Maybe<Scalars['Boolean']>;
  isPremium?: Maybe<Scalars['Boolean']>;
  isFeatured?: Maybe<Scalars['Boolean']>;
  author?: Maybe<Scalars['String']>;
  authorAvatar?: Maybe<Scalars['String']>;
  /** @deprecated Use author instead of this */
  authors?: Maybe<Scalars['String']>;
  programIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  indexedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** @deprecated Not used, will be removed */
  nameLowercase?: Maybe<Scalars['String']>;
  cleanName?: Maybe<Scalars['String']>;
  ingredientsCount?: Maybe<Scalars['Int']>;
  /** @deprecated Not used, will be removed */
  sourceUrlNotWorks?: Maybe<Scalars['Boolean']>;
  syntaxIngs?: Maybe<Array<Maybe<Scalars['String']>>>;
  mealTags?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** @deprecated Not used, will be removed */
  adherence?: Maybe<Scalars['Float']>;
  adherenceDetails?: Maybe<Adherence>;
  usersFavorite?: Maybe<Array<Maybe<Scalars['String']>>>;
  favoritesCount?: Maybe<Scalars['Int']>;
  isUserFavorite?: Maybe<Scalars['Boolean']>;
  usersShoppingList?: Maybe<Array<Maybe<Scalars['String']>>>;
  inUserShoppingList?: Maybe<Scalars['Boolean']>;
  /** @deprecated Use nutritionalInfo or nutrientsPerServing instead */
  nutrients?: Maybe<Nutrients>;
  /** @deprecated Use nutritionalInfo or nutrientsPerServing instead */
  nutrientsFull?: Maybe<RawNutrientsFull>;
  /** @deprecated Not used, internal use only */
  datasetType?: Maybe<Scalars['String']>;
  weightInGrams?: Maybe<Scalars['Float']>;
  relativeCalories?: Maybe<RelativeCalories>;
  /** @deprecated Not used, internal use only */
  sgScores?: Maybe<SgScores>;
  nutrientsPerServing?: Maybe<NutrientsPerServing>;
  servingWeight?: Maybe<Scalars['Float']>;
  serving?: Maybe<Scalars['Int']>;
  /** @deprecated Not used, will be removed */
  servings?: Maybe<Array<Maybe<Servings>>>;
  isRestricted?: Maybe<Scalars['Boolean']>;
  isLogged?: Maybe<Scalars['Boolean']>;
  nutritionalInfo?: Maybe<NutritionalInfo>;
  parsedIngredientLines?: Maybe<Array<Maybe<IngredientLine>>>;
  caloriesPerServing?: Maybe<CaloriesPerServing>;
  isPurchasable?: Maybe<Scalars['Boolean']>;
};


export type RecipeParsedIngredientLinesArgs = {
  preferredUnitSystem?: Maybe<UnitSystem>;
};

export type RecipeConnection = {
  __typename?: 'RecipeConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<RecipeEdge>>;
};

export type RecipeEdge = {
  __typename?: 'RecipeEdge';
  node?: Maybe<Recipe>;
  cursor: Scalars['String'];
};

export enum RecipeMealTime {
  Breakfast = 'BREAKFAST',
  Lunch = 'LUNCH',
  Dinner = 'DINNER',
  Snack = 'SNACK',
  TreatDessert = 'TREAT_DESSERT'
}

export type RecipeSearchResult = {
  __typename?: 'RecipeSearchResult';
  onPlan?: Maybe<Array<Maybe<Recipe>>>;
  otherResults?: Maybe<Array<Maybe<Recipe>>>;
};

export type RecipeSwapOptions = {
  __typename?: 'RecipeSwapOptions';
  onPlan?: Maybe<Array<Maybe<Recipe>>>;
  similar?: Maybe<Array<Maybe<Recipe>>>;
};

export type RecommendationCatalogType = {
  __typename?: 'RecommendationCatalogType';
  id: Scalars['UUID'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  reference: Scalars['String'];
  title: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  textMain?: Maybe<Scalars['String']>;
  textAdditional1?: Maybe<Scalars['String']>;
  textAdditional2?: Maybe<Scalars['String']>;
  profilerecommendationSet?: Maybe<Array<Maybe<ProfileRecommendationType>>>;
  databaseId?: Maybe<Scalars['String']>;
};

export type RecommendedSwaps = {
  __typename?: 'RecommendedSwaps';
  meals?: Maybe<Array<Maybe<Recipe>>>;
  recipes?: Maybe<Array<Maybe<Recipe>>>;
};

export type RelativeCalories = {
  __typename?: 'RelativeCalories';
  carbs?: Maybe<Scalars['Float']>;
  fat?: Maybe<Scalars['Float']>;
  protein?: Maybe<Scalars['Float']>;
  dha?: Maybe<Scalars['Float']>;
  dpa?: Maybe<Scalars['Float']>;
  epa?: Maybe<Scalars['Float']>;
  ala?: Maybe<Scalars['Float']>;
  saturatedFat?: Maybe<Scalars['Float']>;
  monounsaturatedFat?: Maybe<Scalars['Float']>;
  polyunsaturatedFat?: Maybe<Scalars['Float']>;
  transFat?: Maybe<Scalars['Float']>;
  omega3?: Maybe<Scalars['Float']>;
};

export type RemoveFromShoppingList = {
  __typename?: 'RemoveFromShoppingList';
  success?: Maybe<Scalars['Boolean']>;
};

export type RemoveMealLogMutation = {
  __typename?: 'RemoveMealLogMutation';
  success?: Maybe<Scalars['Boolean']>;
};

export type RemoveOwnMeal = {
  __typename?: 'RemoveOwnMeal';
  success?: Maybe<Scalars['Boolean']>;
};

export type Restaurant = Node & {
  __typename?: 'Restaurant';
  id: Scalars['ID'];
  databaseId?: Maybe<Scalars['String']>;
  locationId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  shortName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  location?: Maybe<Array<Maybe<Scalars['Float']>>>;
  hours?: Maybe<Hours>;
  /** @deprecated Use cuisines instead of cuisine */
  cuisine?: Maybe<Scalars['String']>;
  cuisines?: Maybe<Array<Maybe<Scalars['String']>>>;
  businessType?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** @deprecated no longer used */
  minPriceRange?: Maybe<Scalars['Float']>;
  /** @deprecated no longer used */
  maxPriceRange?: Maybe<Scalars['Float']>;
  websiteUrl?: Maybe<Scalars['String']>;
  address1?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  cityTown?: Maybe<Scalars['String']>;
  stateProvince?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  priceRating?: Maybe<Scalars['String']>;
  indexedAt?: Maybe<Scalars['DateTime']>;
  gotAr?: Maybe<Scalars['Boolean']>;
  isOwnerVerified?: Maybe<Scalars['Boolean']>;
  isRecomended?: Maybe<Scalars['Boolean']>;
  recommendation?: Maybe<Scalars['String']>;
  recommendationsCount?: Maybe<Scalars['Int']>;
  photos?: Maybe<Array<Maybe<Scalars['String']>>>;
  isOpen?: Maybe<Scalars['Boolean']>;
  /** @deprecated Use cuisines instead of cuisine_tag */
  cuisineTag?: Maybe<Scalars['String']>;
  usersFavorite?: Maybe<Array<Maybe<Scalars['String']>>>;
  favoritesCount?: Maybe<Scalars['Int']>;
  isUserFavorite?: Maybe<Scalars['Boolean']>;
  type?: Maybe<Scalars['String']>;
  isClosed?: Maybe<Scalars['Boolean']>;
  yelpReviewCount?: Maybe<Scalars['Int']>;
  yelpRating?: Maybe<Scalars['Float']>;
  suggest?: Maybe<Scalars['String']>;
};

export type RestaurantConnection = {
  __typename?: 'RestaurantConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<RestaurantEdge>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type RestaurantEdge = {
  __typename?: 'RestaurantEdge';
  node?: Maybe<Restaurant>;
  cursor: Scalars['String'];
  other?: Maybe<Scalars['String']>;
};

export type RestaurantSearchResult = {
  __typename?: 'RestaurantSearchResult';
  onPlan?: Maybe<Array<Maybe<Restaurant>>>;
  otherResults?: Maybe<Array<Maybe<Restaurant>>>;
};

export type Restriction = Node & {
  __typename?: 'Restriction';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  slugname?: Maybe<Scalars['String']>;
  /** @deprecated use ID! */
  databaseId?: Maybe<Scalars['String']>;
  subcategory?: Maybe<Scalars['String']>;
  isOnProgram?: Maybe<Scalars['Boolean']>;
};

export type RestrictionConnection = {
  __typename?: 'RestrictionConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<RestrictionEdge>>;
};

export type RestrictionEdge = {
  __typename?: 'RestrictionEdge';
  node?: Maybe<Restriction>;
  cursor: Scalars['String'];
};

export type SendFeedback = {
  __typename?: 'SendFeedback';
  success?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
};

export type SensitiveProfileAttributes = {
  __typename?: 'SensitiveProfileAttributes';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Array<Maybe<ErrorType>>>;
};

export type Servings = {
  __typename?: 'Servings';
  amount?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  equivalent?: Maybe<Scalars['Float']>;
  unit?: Maybe<Scalars['String']>;
  selected?: Maybe<Scalars['Boolean']>;
};

export type SgScores = {
  __typename?: 'SgScores';
  keto?: Maybe<Scalars['Float']>;
};

export enum SkillLevel {
  Easy = 'EASY',
  Medium = 'MEDIUM',
  Expert = 'EXPERT'
}

export enum SortBy {
  IndexedAt = 'INDEXED_AT'
}

export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Source = {
  __typename?: 'Source';
  siteUrl?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  recipeUrl: Scalars['String'];
};

export type StartOverMealPlan = {
  __typename?: 'StartOverMealPlan';
  success?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
};

export type Streak = {
  __typename?: 'Streak';
  isToday?: Maybe<Scalars['Boolean']>;
  dayStatus?: Maybe<DayStatus>;
  date?: Maybe<Scalars['Date']>;
  hasPreviousStreak?: Maybe<Scalars['Boolean']>;
  activities?: Maybe<Array<Maybe<EntryType>>>;
};

export enum SubscriptionBillingPeriod {
  Once = 'ONCE',
  Month = 'MONTH',
  TriMonth = 'TRI_MONTH',
  Year = 'YEAR'
}

export enum SubscriptionDuration {
  Month = 'MONTH',
  Year = 'YEAR',
  TriMonth = 'TRI_MONTH',
  Forever = 'FOREVER'
}

export type SubscriptionType = Node & {
  __typename?: 'SubscriptionType';
  id: Scalars['ID'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  recipesBaseQuery?: Maybe<Scalars['JSONString']>;
  permissions?: Maybe<Array<Maybe<Scalars['String']>>>;
  name: Scalars['String'];
  isActive: Scalars['Boolean'];
  billingPeriod?: Maybe<SubscriptionBillingPeriod>;
  duration: SubscriptionDuration;
  totalPrice: Scalars['Int'];
  periodPrice: Scalars['Int'];
  appleId?: Maybe<Scalars['String']>;
  googleplaySku?: Maybe<Scalars['String']>;
  trialPeriodDays: Scalars['Int'];
  stripeProductId?: Maybe<Scalars['String']>;
  isRecurring: Scalars['Boolean'];
  dashboardSet?: Maybe<Array<Maybe<JourneyType>>>;
  databaseId?: Maybe<Scalars['String']>;
};

export type SubscriptionTypeConnection = {
  __typename?: 'SubscriptionTypeConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<SubscriptionTypeEdge>>;
};

export type SubscriptionTypeEdge = {
  __typename?: 'SubscriptionTypeEdge';
  node?: Maybe<SubscriptionType>;
  cursor: Scalars['String'];
};

export type SuggestedMeal = {
  __typename?: 'SuggestedMeal';
  databaseId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  recipeType?: Maybe<Scalars['String']>;
  mealType?: Maybe<MealType>;
  mainImage?: Maybe<Scalars['String']>;
  squareImage?: Maybe<Scalars['String']>;
  mealTime?: Maybe<MealTime>;
  nutrients?: Maybe<Nutrients>;
  isLogged?: Maybe<Scalars['Boolean']>;
  loggedDatabaseId?: Maybe<Scalars['String']>;
};

export type SuggestedMeals = {
  __typename?: 'SuggestedMeals';
  breakfast?: Maybe<SuggestedMeal>;
  lunch?: Maybe<SuggestedMeal>;
  dinner?: Maybe<SuggestedMeal>;
  snack?: Maybe<SuggestedMeal>;
};

export type Suggestion = {
  __typename?: 'Suggestion';
  name?: Maybe<Scalars['String']>;
  suggest?: Maybe<Scalars['String']>;
  mealType?: Maybe<MealType>;
  profileId?: Maybe<Scalars['String']>;
  location?: Maybe<GeoPoint>;
  mealTypeDisplayName?: Maybe<Scalars['String']>;
  databaseId?: Maybe<Scalars['String']>;
  indexedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  extraInfo?: Maybe<Scalars['String']>;
  servings?: Maybe<Array<Maybe<Servings>>>;
  nutrients?: Maybe<Nutrients>;
  nutrientsFull?: Maybe<RawNutrientsFull>;
  nutrientsFullList?: Maybe<Array<Maybe<Nutrient>>>;
  unitOption?: Maybe<Scalars['String']>;
  courses?: Maybe<Array<Maybe<Scalars['String']>>>;
  brand?: Maybe<Scalars['String']>;
  servingWeight?: Maybe<Scalars['Float']>;
  serving?: Maybe<Scalars['Int']>;
  barcode?: Maybe<Scalars['String']>;
  manufacName?: Maybe<Scalars['String']>;
  foodBlockOrManufacturer?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  secondaryInfoText?: Maybe<Scalars['String']>;
  isVerified?: Maybe<Scalars['Boolean']>;
  nutritionalInfo?: Maybe<NutritionalInfo>;
  isRawIngredient?: Maybe<Scalars['Boolean']>;
};

export type SwapMealPlanRecipe = {
  __typename?: 'SwapMealPlanRecipe';
  /** @deprecated Not used, will be removed */
  mealPlan?: Maybe<Array<Maybe<MealPlanDay>>>;
  success?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
};

export type TaskItemType = {
  __typename?: 'TaskItemType';
  id: Scalars['ID'];
  keyHash?: Maybe<Scalars['String']>;
  taskListId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  isCompleted?: Maybe<Scalars['Boolean']>;
};

export type TaskListType = {
  __typename?: 'TaskListType';
  id: Scalars['ID'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  taskItems?: Maybe<Array<Maybe<TaskItemType>>>;
  taskTemplate?: Maybe<Scalars['String']>;
  dialogSet?: Maybe<Array<Maybe<DialogType>>>;
  databaseId?: Maybe<Scalars['String']>;
};

export enum TendecyType {
  Down = 'DOWN',
  Up = 'UP'
}

export type Tendency = {
  __typename?: 'Tendency';
  difference?: Maybe<Scalars['Float']>;
  type?: Maybe<TendecyType>;
};


export type ToggleShoppingListItem = {
  __typename?: 'ToggleShoppingListItem';
  success?: Maybe<Scalars['Boolean']>;
};

export type ToggleTaskCompleted = {
  __typename?: 'ToggleTaskCompleted';
  message?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};


export enum UnitSystem {
  Imperial = 'IMPERIAL',
  Metric = 'METRIC'
}

export type UpdateHydration = {
  __typename?: 'UpdateHydration';
  success?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
};

export type UpdateJourneyStatus = {
  __typename?: 'UpdateJourneyStatus';
  success?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
};

export type UpdateMealLogMutation = {
  __typename?: 'UpdateMealLogMutation';
  success?: Maybe<Scalars['Boolean']>;
};

export type UpdateOwnMealMutation = {
  __typename?: 'UpdateOwnMealMutation';
  success?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
};

export type UpdateOwnRecipe = {
  __typename?: 'UpdateOwnRecipe';
  success: Scalars['Boolean'];
  message: Scalars['String'];
};

export type UpdateProfile = {
  __typename?: 'UpdateProfile';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Array<Maybe<ErrorType>>>;
};

export type UpdateProfileBiomarkers = {
  __typename?: 'UpdateProfileBiomarkers';
  success?: Maybe<Scalars['Boolean']>;
};

export type UpdateShoppingListRecipeServings = {
  __typename?: 'UpdateShoppingListRecipeServings';
  success?: Maybe<Scalars['Boolean']>;
};

export type UpdateSubscription = {
  __typename?: 'UpdateSubscription';
  success?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
};

export type UpdateUserProgram = {
  __typename?: 'UpdateUserProgram';
  success?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
};

export type UsdaFood = Node & {
  __typename?: 'UsdaFood';
  id: Scalars['ID'];
  foodDataId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  dataType?: Maybe<Scalars['String']>;
  commonNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  portions?: Maybe<Array<Maybe<Portion>>>;
  nutrients?: Maybe<Array<Maybe<UsdaNutrient>>>;
};

export type UsdaNutrient = {
  __typename?: 'UsdaNutrient';
  amount?: Maybe<Scalars['Float']>;
  unit?: Maybe<Scalars['String']>;
  nutrientNbr?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  id?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type UserFavoriteMenuItem = {
  __typename?: 'UserFavoriteMenuItem';
  success?: Maybe<Scalars['Boolean']>;
  isUserFavorite?: Maybe<Scalars['Boolean']>;
};

export type UserFavoriteRecipe = {
  __typename?: 'UserFavoriteRecipe';
  success?: Maybe<Scalars['Boolean']>;
  isUserFavorite?: Maybe<Scalars['Boolean']>;
};

export type UserFavoriteRestaurant = {
  __typename?: 'UserFavoriteRestaurant';
  success?: Maybe<Scalars['Boolean']>;
  isUserFavorite?: Maybe<Scalars['Boolean']>;
};

export type WaterLogMutation = {
  __typename?: 'WaterLogMutation';
  success?: Maybe<Scalars['Boolean']>;
  count?: Maybe<Scalars['Int']>;
};

export enum WeeklyWeightGoal {
  Maintain = 'MAINTAIN',
  Goal_0_5 = 'GOAL_0_5',
  Goal_1_0 = 'GOAL_1_0',
  Goal_1_5 = 'GOAL_1_5',
  Goal_2_0 = 'GOAL_2_0',
  Mantain = 'MANTAIN',
  Goal_1 = 'GOAL_1',
  Goal_2 = 'GOAL_2',
  Goal_3 = 'GOAL_3',
  Goal_4 = 'GOAL_4'
}

export type WeightTracker = {
  __typename?: 'WeightTracker';
  start?: Maybe<Scalars['Float']>;
  today?: Maybe<Scalars['Float']>;
  tendency?: Maybe<Tendency>;
  entries?: Maybe<Array<Maybe<Entry>>>;
};

export type GenerateMealPlanFragment = (
  { __typename?: 'GenerateMealPlan' }
  & Pick<GenerateMealPlan, 'message' | 'success'>
);

export type ProfileMealPlanSettingsFragment = (
  { __typename?: 'ProfileMealPlanSettings' }
  & Pick<ProfileMealPlanSettings, 'success'>
);

export type MealFragment = (
  { __typename?: 'Meal' }
  & Pick<Meal, 'calories' | 'id' | 'maxNumOfServings' | 'meal' | 'numOfServings'>
  & { recipe?: Maybe<(
    { __typename?: 'Recipe' }
    & Pick<Recipe, 'id'>
  )> }
);

export type MealPlanDayFragment = (
  { __typename?: 'MealPlanDay' }
  & Pick<MealPlanDay, 'calories' | 'date' | 'day'>
  & { meals?: Maybe<Array<Maybe<(
    { __typename?: 'Meal' }
    & MealFragment
  )>>> }
);

export type PageInfoFragment = (
  { __typename?: 'PageInfo' }
  & Pick<PageInfo, 'endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'startCursor'>
);

export type UserFragment = (
  { __typename?: 'User' }
  & Pick<User, 'email' | 'id' | 'isActive' | 'name' | 'phone'>
);

export type CreateUserFragment = (
  { __typename?: 'CreateUser' }
  & Pick<CreateUser, 'message' | 'success'>
  & { user?: Maybe<(
    { __typename?: 'User' }
    & UserFragment
  )> }
);

export type SubscriptionTypeFragment = (
  { __typename?: 'SubscriptionType' }
  & Pick<SubscriptionType, 'appleId' | 'createdAt' | 'databaseId' | 'googleplaySku' | 'id' | 'isActive' | 'isRecurring' | 'name' | 'periodPrice' | 'permissions' | 'recipesBaseQuery' | 'stripeProductId' | 'totalPrice' | 'trialPeriodDays' | 'updatedAt'>
);

export type RestrictionFragment = (
  { __typename?: 'Restriction' }
  & Pick<Restriction, 'databaseId' | 'id' | 'isOnProgram' | 'name' | 'slugname' | 'subcategory'>
);

export type ProfileTypeFragment = (
  { __typename?: 'ProfileType' }
  & Pick<ProfileType, 'age' | 'birthdate' | 'createdAt' | 'customAttributes' | 'extraData' | 'gender' | 'goalsOn' | 'hasNotifications' | 'hasOnboarded' | 'height' | 'id' | 'isImperial' | 'mpCalories' | 'mpCarbsPerc' | 'mpDays' | 'mpError' | 'mpFatPerc' | 'mpFormat' | 'mpMonounsaturatedFatPerc' | 'mpOmega3Perc' | 'mpPolyunsaturatedFatPerc' | 'mpProteinPerc' | 'mpSaturatedFatPerc' | 'mpTransFatPerc' | 'needsNewPassword' | 'startingWeight' | 'targetWeight' | 'timezone' | 'updatedAt' | 'userId'>
  & { program?: Maybe<(
    { __typename?: 'Program' }
    & Pick<Program, 'id'>
  )>, restrictions?: Maybe<Array<Maybe<(
    { __typename?: 'Restriction' }
    & RestrictionFragment
  )>>>, subscription?: Maybe<(
    { __typename?: 'SubscriptionType' }
    & SubscriptionTypeFragment
  )> }
);

export type RecipeConnectionFragment = (
  { __typename?: 'RecipeConnection' }
  & { pageInfo: (
    { __typename?: 'PageInfo' }
    & PageInfoFragment
  ) }
);

export type ProgramConnectionFragment = (
  { __typename?: 'ProgramConnection' }
  & { pageInfo: (
    { __typename?: 'PageInfo' }
    & PageInfoFragment
  ) }
);

export type ProgramFragment = (
  { __typename?: 'Program' }
  & Pick<Program, 'author' | 'authorAvatar' | 'authors' | 'backgroundImage' | 'books' | 'comment' | 'cover' | 'databaseId' | 'decreaseDelta' | 'defaultVideoThumnail' | 'descriptionLong' | 'descriptionShort' | 'id' | 'image' | 'increaseDelta' | 'isActive' | 'lowerBound' | 'name' | 'normalizingTemperature' | 'order' | 'restrictions' | 'slug' | 'tags' | 'upperBound'>
);

export type GenerateSimpleMealPlanFragment = (
  { __typename?: 'GenerateSimpleMealPlan' }
  & Pick<GenerateSimpleMealPlan, 'message' | 'success'>
);

export type CreateUserMutationVariables = Exact<{
  email?: Maybe<Scalars['String']>;
  emailPasswordNotification?: Maybe<Scalars['Boolean']>;
  extraData?: Maybe<Scalars['JSONString']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  program?: Maybe<Scalars['String']>;
  restrictions?: Maybe<Array<Maybe<Scalars['String']>> | Maybe<Scalars['String']>>;
}>;


export type CreateUserMutation = (
  { __typename?: 'Mutation' }
  & { createUser?: Maybe<(
    { __typename?: 'CreateUser' }
    & CreateUserFragment
  )> }
);

export type GenerateMealPlanMutationVariables = Exact<{
  addDays?: Maybe<Scalars['Boolean']>;
  breakfastDistribution?: Maybe<Scalars['Float']>;
  dinnerDistribution?: Maybe<Scalars['Float']>;
  ignoreLock?: Maybe<Scalars['Boolean']>;
  isCache?: Maybe<Scalars['Boolean']>;
  kcalLimit?: Maybe<Scalars['Float']>;
  lunchDistribution?: Maybe<Scalars['Float']>;
  maxNumOfServings?: Maybe<Scalars['Int']>;
  maxServingWeight?: Maybe<Scalars['Int']>;
  minServingWeight?: Maybe<Scalars['Int']>;
  repeat?: Maybe<Scalars['DateTime']>;
  snackDistribution?: Maybe<Scalars['Float']>;
}>;


export type GenerateMealPlanMutation = (
  { __typename?: 'Mutation' }
  & { generateMealPlan?: Maybe<(
    { __typename?: 'GenerateMealPlan' }
    & GenerateMealPlanFragment
  )> }
);

export type GenerateSimpleMealPlanMutationVariables = Exact<{
  addDays?: Maybe<Scalars['Boolean']>;
  ignoreLock?: Maybe<Scalars['Boolean']>;
  repeat?: Maybe<Scalars['DateTime']>;
}>;


export type GenerateSimpleMealPlanMutation = (
  { __typename?: 'Mutation' }
  & { generateSimpleMealPlan?: Maybe<(
    { __typename?: 'GenerateSimpleMealPlan' }
    & GenerateSimpleMealPlanFragment
  )> }
);

export type ProfileMealPlanSettingsMutationVariables = Exact<{
  calories: Scalars['Int'];
  carbsPerc: Scalars['Float'];
  error: Scalars['Float'];
  fatPerc: Scalars['Float'];
  format?: Maybe<Array<Maybe<MealTime>> | Maybe<MealTime>>;
  omega3Perc?: Maybe<Scalars['Float']>;
  proteinPerc: Scalars['Float'];
}>;


export type ProfileMealPlanSettingsMutation = (
  { __typename?: 'Mutation' }
  & { profileMealPlanSettings?: Maybe<(
    { __typename?: 'ProfileMealPlanSettings' }
    & ProfileMealPlanSettingsFragment
  )> }
);

export type SearchProfileQueryVariables = Exact<{
  email: Scalars['String'];
}>;


export type SearchProfileQuery = (
  { __typename?: 'Query' }
  & { searchProfile?: Maybe<(
    { __typename?: 'ProfileType' }
    & ProfileTypeFragment
  )> }
);

export type RecipeSearchQueryVariables = Exact<{
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  cuisines?: Maybe<Array<Maybe<Scalars['String']>> | Maybe<Scalars['String']>>;
  dietaryTag?: Maybe<DietaryTag>;
  first?: Maybe<Scalars['Int']>;
  hasImage?: Maybe<Scalars['Boolean']>;
  hasInstructions?: Maybe<Scalars['Boolean']>;
  ingredients?: Maybe<Array<Maybe<Scalars['String']>> | Maybe<Scalars['String']>>;
  isPremium?: Maybe<Scalars['Boolean']>;
  last?: Maybe<Scalars['Int']>;
  macroNutrientsRange?: Maybe<MacroNutrientsRangeInput>;
  maxPrepTime?: Maybe<Scalars['Int']>;
  mealTime?: Maybe<RecipeMealTime>;
  meals?: Maybe<Array<Maybe<Scalars['String']>> | Maybe<Scalars['String']>>;
  numberOfIngredients?: Maybe<Scalars['Int']>;
  program?: Maybe<Scalars['String']>;
  query?: Maybe<Scalars['String']>;
  skillLevel?: Maybe<SkillLevel>;
  tags?: Maybe<Array<Maybe<Scalars['String']>> | Maybe<Scalars['String']>>;
  totalTime?: Maybe<Scalars['Float']>;
}>;


export type RecipeSearchQuery = (
  { __typename?: 'Query' }
  & { recipeSearch?: Maybe<(
    { __typename?: 'RecipeConnection' }
    & RecipeConnectionFragment
  )> }
);

export type MealPlanQueryVariables = Exact<{
  fromDate?: Maybe<Scalars['Date']>;
}>;


export type MealPlanQuery = (
  { __typename?: 'Query' }
  & { mealPlan?: Maybe<Array<Maybe<(
    { __typename?: 'MealPlanDay' }
    & MealPlanDayFragment
  )>>> }
);

export type CustomMealPlanQueryVariables = Exact<{
  breakfastDistribution?: Maybe<Scalars['Float']>;
  calories?: Maybe<Scalars['Int']>;
  carbs?: Maybe<Scalars['Float']>;
  days?: Maybe<Scalars['Int']>;
  dinnerDistribution?: Maybe<Scalars['Float']>;
  error?: Maybe<Scalars['Float']>;
  fat?: Maybe<Scalars['Float']>;
  format: Array<Maybe<MealTime>> | Maybe<MealTime>;
  lunchDistribution?: Maybe<Scalars['Float']>;
  omega3?: Maybe<Scalars['Float']>;
  protein?: Maybe<Scalars['Float']>;
  snackDistribution?: Maybe<Scalars['Float']>;
}>;


export type CustomMealPlanQuery = (
  { __typename?: 'Query' }
  & { customMealPlan?: Maybe<Array<Maybe<(
    { __typename?: 'MealPlanDay' }
    & MealPlanDayFragment
  )>>> }
);

export type ProgramsQueryVariables = Exact<{
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
  isPremium?: Maybe<Scalars['Boolean']>;
  last?: Maybe<Scalars['Int']>;
}>;


export type ProgramsQuery = (
  { __typename?: 'Query' }
  & { programs?: Maybe<(
    { __typename?: 'ProgramConnection' }
    & ProgramConnectionFragment
  )> }
);

export type ProgramQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ProgramQuery = (
  { __typename?: 'Query' }
  & { program?: Maybe<(
    { __typename?: 'Program' }
    & ProgramFragment
  )> }
);

export const GenerateMealPlanFragmentDoc = gql`
    fragment GenerateMealPlan on GenerateMealPlan {
  message
  success
}
    `;
export const ProfileMealPlanSettingsFragmentDoc = gql`
    fragment ProfileMealPlanSettings on ProfileMealPlanSettings {
  success
}
    `;
export const MealFragmentDoc = gql`
    fragment Meal on Meal {
  calories
  id
  maxNumOfServings
  meal
  numOfServings
  recipe {
    id
  }
}
    `;
export const MealPlanDayFragmentDoc = gql`
    fragment MealPlanDay on MealPlanDay {
  calories
  date
  day
  meals {
    ...Meal
  }
}
    ${MealFragmentDoc}`;
export const UserFragmentDoc = gql`
    fragment User on User {
  email
  id
  isActive
  name
  phone
}
    `;
export const CreateUserFragmentDoc = gql`
    fragment CreateUser on CreateUser {
  message
  success
  user {
    ...User
  }
}
    ${UserFragmentDoc}`;
export const RestrictionFragmentDoc = gql`
    fragment Restriction on Restriction {
  databaseId
  id
  isOnProgram
  name
  slugname
  subcategory
}
    `;
export const SubscriptionTypeFragmentDoc = gql`
    fragment SubscriptionType on SubscriptionType {
  appleId
  createdAt
  databaseId
  googleplaySku
  id
  isActive
  isRecurring
  name
  periodPrice
  permissions
  recipesBaseQuery
  stripeProductId
  totalPrice
  trialPeriodDays
  updatedAt
}
    `;
export const ProfileTypeFragmentDoc = gql`
    fragment ProfileType on ProfileType {
  age
  birthdate
  createdAt
  customAttributes
  extraData
  gender
  goalsOn
  hasNotifications
  hasOnboarded
  height
  id
  isImperial
  mpCalories
  mpCarbsPerc
  mpDays
  mpError
  mpFatPerc
  mpFormat
  mpMonounsaturatedFatPerc
  mpOmega3Perc
  mpPolyunsaturatedFatPerc
  mpProteinPerc
  mpSaturatedFatPerc
  mpTransFatPerc
  needsNewPassword
  program {
    id
  }
  restrictions {
    ...Restriction
  }
  startingWeight
  subscription {
    ...SubscriptionType
  }
  targetWeight
  timezone
  updatedAt
  userId
}
    ${RestrictionFragmentDoc}
${SubscriptionTypeFragmentDoc}`;
export const PageInfoFragmentDoc = gql`
    fragment PageInfo on PageInfo {
  endCursor
  hasNextPage
  hasPreviousPage
  startCursor
}
    `;
export const RecipeConnectionFragmentDoc = gql`
    fragment RecipeConnection on RecipeConnection {
  pageInfo {
    ...PageInfo
  }
}
    ${PageInfoFragmentDoc}`;
export const ProgramConnectionFragmentDoc = gql`
    fragment ProgramConnection on ProgramConnection {
  pageInfo {
    ...PageInfo
  }
}
    ${PageInfoFragmentDoc}`;
export const ProgramFragmentDoc = gql`
    fragment Program on Program {
  author
  authorAvatar
  authors
  backgroundImage
  books
  comment
  cover
  databaseId
  decreaseDelta
  defaultVideoThumnail
  descriptionLong
  descriptionShort
  id
  image
  increaseDelta
  isActive
  lowerBound
  name
  normalizingTemperature
  order
  restrictions
  slug
  tags
  upperBound
}
    `;
export const GenerateSimpleMealPlanFragmentDoc = gql`
    fragment GenerateSimpleMealPlan on GenerateSimpleMealPlan {
  message
  success
}
    `;
export const CreateUserDocument = gql`
    mutation createUser($email: String, $emailPasswordNotification: Boolean, $extraData: JSONString, $name: String, $phone: String, $program: String, $restrictions: [String]) {
  createUser(
    email: $email
    emailPasswordNotification: $emailPasswordNotification
    extraData: $extraData
    name: $name
    phone: $phone
    program: $program
    restrictions: $restrictions
  ) {
    ...CreateUser
  }
}
    ${CreateUserFragmentDoc}`;
export const GenerateMealPlanDocument = gql`
    mutation generateMealPlan($addDays: Boolean, $breakfastDistribution: Float, $dinnerDistribution: Float, $ignoreLock: Boolean, $isCache: Boolean, $kcalLimit: Float, $lunchDistribution: Float, $maxNumOfServings: Int, $maxServingWeight: Int, $minServingWeight: Int, $repeat: DateTime, $snackDistribution: Float) {
  generateMealPlan(
    addDays: $addDays
    breakfastDistribution: $breakfastDistribution
    dinnerDistribution: $dinnerDistribution
    ignoreLock: $ignoreLock
    isCache: $isCache
    kcalLimit: $kcalLimit
    lunchDistribution: $lunchDistribution
    maxNumOfServings: $maxNumOfServings
    maxServingWeight: $maxServingWeight
    minServingWeight: $minServingWeight
    repeat: $repeat
    snackDistribution: $snackDistribution
  ) {
    ...GenerateMealPlan
  }
}
    ${GenerateMealPlanFragmentDoc}`;
export const GenerateSimpleMealPlanDocument = gql`
    mutation generateSimpleMealPlan($addDays: Boolean, $ignoreLock: Boolean, $repeat: DateTime) {
  generateSimpleMealPlan(
    addDays: $addDays
    ignoreLock: $ignoreLock
    repeat: $repeat
  ) {
    ...GenerateSimpleMealPlan
  }
}
    ${GenerateSimpleMealPlanFragmentDoc}`;
export const ProfileMealPlanSettingsDocument = gql`
    mutation profileMealPlanSettings($calories: Int!, $carbsPerc: Float!, $error: Float!, $fatPerc: Float!, $format: [MealTime], $omega3Perc: Float, $proteinPerc: Float!) {
  profileMealPlanSettings(
    calories: $calories
    carbsPerc: $carbsPerc
    error: $error
    fatPerc: $fatPerc
    format: $format
    omega3Perc: $omega3Perc
    proteinPerc: $proteinPerc
  ) {
    ...ProfileMealPlanSettings
  }
}
    ${ProfileMealPlanSettingsFragmentDoc}`;
export const SearchProfileDocument = gql`
    query searchProfile($email: String!) {
  searchProfile(email: $email) {
    ...ProfileType
  }
}
    ${ProfileTypeFragmentDoc}`;
export const RecipeSearchDocument = gql`
    query recipeSearch($after: String, $before: String, $cuisines: [String], $dietaryTag: DietaryTag, $first: Int, $hasImage: Boolean, $hasInstructions: Boolean, $ingredients: [String], $isPremium: Boolean, $last: Int, $macroNutrientsRange: MacroNutrientsRangeInput, $maxPrepTime: Int, $mealTime: RecipeMealTime, $meals: [String], $numberOfIngredients: Int, $program: String, $query: String, $skillLevel: SkillLevel, $tags: [String], $totalTime: Float) {
  recipeSearch(
    after: $after
    before: $before
    cuisines: $cuisines
    dietaryTag: $dietaryTag
    first: $first
    hasImage: $hasImage
    hasInstructions: $hasInstructions
    ingredients: $ingredients
    isPremium: $isPremium
    last: $last
    macroNutrientsRange: $macroNutrientsRange
    maxPrepTime: $maxPrepTime
    mealTime: $mealTime
    meals: $meals
    numberOfIngredients: $numberOfIngredients
    program: $program
    query: $query
    skillLevel: $skillLevel
    tags: $tags
    totalTime: $totalTime
  ) {
    ...RecipeConnection
  }
}
    ${RecipeConnectionFragmentDoc}`;
export const MealPlanDocument = gql`
    query mealPlan($fromDate: Date) {
  mealPlan(fromDate: $fromDate) {
    ...MealPlanDay
  }
}
    ${MealPlanDayFragmentDoc}`;
export const CustomMealPlanDocument = gql`
    query customMealPlan($breakfastDistribution: Float, $calories: Int, $carbs: Float, $days: Int, $dinnerDistribution: Float, $error: Float, $fat: Float, $format: [MealTime]!, $lunchDistribution: Float, $omega3: Float, $protein: Float, $snackDistribution: Float) {
  customMealPlan(
    breakfastDistribution: $breakfastDistribution
    calories: $calories
    carbs: $carbs
    days: $days
    dinnerDistribution: $dinnerDistribution
    error: $error
    fat: $fat
    format: $format
    lunchDistribution: $lunchDistribution
    omega3: $omega3
    protein: $protein
    snackDistribution: $snackDistribution
  ) {
    ...MealPlanDay
  }
}
    ${MealPlanDayFragmentDoc}`;
export const ProgramsDocument = gql`
    query programs($after: String, $before: String, $first: Int, $isActive: Boolean, $isPremium: Boolean, $last: Int) {
  programs(
    after: $after
    before: $before
    first: $first
    isActive: $isActive
    isPremium: $isPremium
    last: $last
  ) {
    ...ProgramConnection
  }
}
    ${ProgramConnectionFragmentDoc}`;
export const ProgramDocument = gql`
    query program($id: ID!) {
  program(id: $id) {
    ...Program
  }
}
    ${ProgramFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = sdkFunction => sdkFunction();
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    createUser(variables?: CreateUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateUserMutation> {
      return withWrapper(() => client.request<CreateUserMutation>(CreateUserDocument, variables, requestHeaders));
    },
    generateMealPlan(variables?: GenerateMealPlanMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GenerateMealPlanMutation> {
      return withWrapper(() => client.request<GenerateMealPlanMutation>(GenerateMealPlanDocument, variables, requestHeaders));
    },
    generateSimpleMealPlan(variables?: GenerateSimpleMealPlanMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GenerateSimpleMealPlanMutation> {
      return withWrapper(() => client.request<GenerateSimpleMealPlanMutation>(GenerateSimpleMealPlanDocument, variables, requestHeaders));
    },
    profileMealPlanSettings(variables: ProfileMealPlanSettingsMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ProfileMealPlanSettingsMutation> {
      return withWrapper(() => client.request<ProfileMealPlanSettingsMutation>(ProfileMealPlanSettingsDocument, variables, requestHeaders));
    },
    searchProfile(variables: SearchProfileQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SearchProfileQuery> {
      return withWrapper(() => client.request<SearchProfileQuery>(SearchProfileDocument, variables, requestHeaders));
    },
    recipeSearch(variables?: RecipeSearchQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<RecipeSearchQuery> {
      return withWrapper(() => client.request<RecipeSearchQuery>(RecipeSearchDocument, variables, requestHeaders));
    },
    mealPlan(variables?: MealPlanQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MealPlanQuery> {
      return withWrapper(() => client.request<MealPlanQuery>(MealPlanDocument, variables, requestHeaders));
    },
    customMealPlan(variables: CustomMealPlanQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CustomMealPlanQuery> {
      return withWrapper(() => client.request<CustomMealPlanQuery>(CustomMealPlanDocument, variables, requestHeaders));
    },
    programs(variables?: ProgramsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ProgramsQuery> {
      return withWrapper(() => client.request<ProgramsQuery>(ProgramsDocument, variables, requestHeaders));
    },
    program(variables: ProgramQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ProgramQuery> {
      return withWrapper(() => client.request<ProgramQuery>(ProgramDocument, variables, requestHeaders));
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;