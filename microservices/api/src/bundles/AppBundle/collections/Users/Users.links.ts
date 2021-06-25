import { GroupsCollection } from "../Groups/Groups.collection";
import { CommentsCollection } from "../Comments/Comments.collection";
import { PostsCollection } from "../Posts/Posts.collection";
import { IBundleLinkCollectionOption } from "@kaviar/mongo-bundle";

// Export link names as constants with type of: IBundleLinkCollectionOption, sample:
// export const company: IBundleLinkCollectionOption = { ... }

export const post: IBundleLinkCollectionOption = {
  collection: () => PostsCollection,
  inversedBy: "user",
};

export const comments: IBundleLinkCollectionOption = {
  collection: () => CommentsCollection,
  inversedBy: "user",
};

export const posts: IBundleLinkCollectionOption = {
  collection: () => PostsCollection,
  inversedBy: "user",
};

export const groups: IBundleLinkCollectionOption = {
  collection: () => GroupsCollection,
  many: true,
  field: "groupsIds",
};
