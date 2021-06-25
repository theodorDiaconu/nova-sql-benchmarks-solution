import { UsersCollection } from "../Users/Users.collection";
import { IBundleLinkCollectionOption } from "@kaviar/mongo-bundle";

// Export link names as constants with type of: IBundleLinkCollectionOption, sample:
// export const company: IBundleLinkCollectionOption = { ... }

export const users: IBundleLinkCollectionOption = {
  collection: () => UsersCollection,
  many: true,
  inversedBy: "groups",
};
