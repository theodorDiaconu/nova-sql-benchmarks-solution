export default /* GraphQL */ `
  type Comment {
    _id: ObjectId!
    text: String!
    post: Post!
    user: User!
  }
`;
