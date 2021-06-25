import * as X from "@kaviar/x-bundle";
import { IResolverMap } from "@kaviar/graphql-bundle";

import { GroupsCollection } from "../../../collections/Groups/Groups.collection";

export default {
  Query: [
    [],
    {
      groupsFindOne: [X.ToNovaOne(GroupsCollection)],
      groupsFind: [X.ToNova(GroupsCollection)],
      groupsCount: [X.ToCollectionCount(GroupsCollection)],
    },
  ],
  Mutation: [
    [],
    {
      groupsInsertOne: [
        X.ToDocumentInsert(GroupsCollection),
        X.ToNovaByResultID(GroupsCollection),
      ],
      groupsUpdateOne: [
        X.CheckDocumentExists(GroupsCollection),
        X.ToDocumentUpdateByID(GroupsCollection),
        X.ToNovaByResultID(GroupsCollection),
      ],
      groupsDeleteOne: [
        X.CheckDocumentExists(GroupsCollection),
        X.ToDocumentDeleteByID(GroupsCollection),
      ],
    },
  ],
} as IResolverMap;
