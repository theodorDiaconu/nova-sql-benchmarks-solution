export default /* GraphQL */ `
  type User {
    _id: ObjectId!
    email: String
    name: String
    posts: [Post]!
    roles: [String]
    groups: [Group]!
  }
`;
