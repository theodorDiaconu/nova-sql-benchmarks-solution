export default /* GraphQL */ `
  type Group {
    _id: ObjectId!
    name: String!
    users: [User]!
  }
`;
