export default /* GraphQL */ `
  type Query {
    tagsFindOne(query: QueryInput): Tag
    tagsFind(query: QueryInput): [Tag]!
    tagsCount(query: QueryInput): Int!
  }

  type Mutation {
    tagsInsertOne(document: EJSON!): Tag
    tagsUpdateOne(_id: ObjectId!, modifier: EJSON!): Tag!
    tagsDeleteOne(_id: ObjectId!): Boolean
  }
`;
