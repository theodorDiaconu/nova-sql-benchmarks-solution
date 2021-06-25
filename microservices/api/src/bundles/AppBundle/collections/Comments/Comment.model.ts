import { Schema, Is, a, an } from "@kaviar/validator-bundle";

@Schema()
export class Comment {
  @Is(a.objectId().required())
  _id: any;

  @Is(a.string().required())
  text: string;
}
