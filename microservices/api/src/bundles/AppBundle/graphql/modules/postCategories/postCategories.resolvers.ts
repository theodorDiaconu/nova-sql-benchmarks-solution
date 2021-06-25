import * as X from "@kaviar/x-bundle";
import { IResolverMap } from "@kaviar/graphql-bundle";

import { PostCategoriesCollection } from "../../../collections/PostCategories/PostCategories.collection";

export default {
  Query: [
    [],
    {
      postCategoriesFindOne: [X.ToNovaOne(PostCategoriesCollection)],
      postCategoriesFind: [X.ToNova(PostCategoriesCollection)],
      postCategoriesCount: [X.ToCollectionCount(PostCategoriesCollection)],
    },
  ],
  Mutation: [
    [],
    {
      postCategoriesInsertOne: [
        X.ToDocumentInsert(PostCategoriesCollection),
        X.ToNovaByResultID(PostCategoriesCollection),
      ],
      postCategoriesUpdateOne: [
        X.CheckDocumentExists(PostCategoriesCollection),
        X.ToDocumentUpdateByID(PostCategoriesCollection),
        X.ToNovaByResultID(PostCategoriesCollection),
      ],
      postCategoriesDeleteOne: [
        X.CheckDocumentExists(PostCategoriesCollection),
        X.ToDocumentDeleteByID(PostCategoriesCollection),
      ],
    },
  ],
} as IResolverMap;
