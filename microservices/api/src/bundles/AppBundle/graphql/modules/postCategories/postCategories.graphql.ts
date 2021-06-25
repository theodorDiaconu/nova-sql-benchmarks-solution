export default /* GraphQL */ `
  type Query {
    postCategoriesFindOne(query: QueryInput): PostCategory
    postCategoriesFind(query: QueryInput): [PostCategory]!
    postCategoriesCount(query: QueryInput): Int!
  }

  type Mutation {
    postCategoriesInsertOne(document: EJSON!): PostCategory
    postCategoriesUpdateOne(_id: ObjectId!, modifier: EJSON!): PostCategory!
    postCategoriesDeleteOne(_id: ObjectId!): Boolean
  }
`;
