import { Collection, Behaviors } from "@kaviar/mongo-bundle";
import * as links from "./Groups.links";
import * as reducers from "./Groups.reducers";
import { Group } from "./Group.model";

export class GroupsCollection extends Collection<Group> {
  static collectionName = "groups";
  static model = Group;

  static links = links;
  static reducers = reducers;

  // Create an array of indexes
  static indexes = [];
}
