import { Collection, Behaviors } from "@kaviar/mongo-bundle";
import * as links from "./Comments.links";
import * as reducers from "./Comments.reducers";
import { Comment } from "./Comment.model";

export class CommentsCollection extends Collection<Comment> {
  static collectionName = "comments";
  static model = Comment;

  static links = links;
  static reducers = reducers;

  // Create an array of indexes
  static indexes = [];
}
