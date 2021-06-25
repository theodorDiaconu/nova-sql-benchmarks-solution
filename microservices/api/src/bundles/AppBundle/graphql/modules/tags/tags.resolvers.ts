import * as X from "@kaviar/x-bundle";
import { IResolverMap } from "@kaviar/graphql-bundle";

import { TagsCollection } from "../../../collections/Tags/Tags.collection";

export default {
  Query: [
    [],
    {
      tagsFindOne: [X.ToNovaOne(TagsCollection)],
      tagsFind: [X.ToNova(TagsCollection)],
      tagsCount: [X.ToCollectionCount(TagsCollection)],
    },
  ],
  Mutation: [
    [],
    {
      tagsInsertOne: [
        X.ToDocumentInsert(TagsCollection),
        X.ToNovaByResultID(TagsCollection),
      ],
      tagsUpdateOne: [
        X.CheckDocumentExists(TagsCollection),
        X.ToDocumentUpdateByID(TagsCollection),
        X.ToNovaByResultID(TagsCollection),
      ],
      tagsDeleteOne: [
        X.CheckDocumentExists(TagsCollection),
        X.ToDocumentDeleteByID(TagsCollection),
      ],
    },
  ],
} as IResolverMap;
