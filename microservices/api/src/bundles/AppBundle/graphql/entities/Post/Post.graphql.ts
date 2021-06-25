export default /* GraphQL */ `
  type Post {
    _id: ObjectId!
    title: String!
    description: String!
    comments: [Comment]!
    user: User!
    category: PostCategory!
    tags: [Tag]!
  }
`;
