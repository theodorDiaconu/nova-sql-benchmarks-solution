import { Collection, Behaviors } from "@kaviar/mongo-bundle";
import * as links from "./PostCategories.links";
import * as reducers from "./PostCategories.reducers";
import { PostCategory } from "./PostCategory.model";

export class PostCategoriesCollection extends Collection<PostCategory> {
  static collectionName = "postCategories";
  static model = PostCategory;

  static links = links;
  static reducers = reducers;

  // Create an array of indexes
  static indexes = [];
}
