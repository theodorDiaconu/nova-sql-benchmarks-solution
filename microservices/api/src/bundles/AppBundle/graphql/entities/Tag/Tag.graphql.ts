export default /* GraphQL */ `
  type Tag {
    _id: ObjectId!
    name: String!
    posts: [Post]!
  }
`;
