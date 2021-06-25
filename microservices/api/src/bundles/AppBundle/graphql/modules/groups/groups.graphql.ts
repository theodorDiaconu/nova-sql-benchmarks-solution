export default /* GraphQL */ `
  type Query {
    groupsFindOne(query: QueryInput): Group
    groupsFind(query: QueryInput): [Group]!
    groupsCount(query: QueryInput): Int!
  }

  type Mutation {
    groupsInsertOne(document: EJSON!): Group
    groupsUpdateOne(_id: ObjectId!, modifier: EJSON!): Group!
    groupsDeleteOne(_id: ObjectId!): Boolean
  }
`;
