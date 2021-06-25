export default /* GraphQL */ `
  type PostCategory {
    _id: ObjectId!
    name: String!
    posts: [Post]!
  }
`;
