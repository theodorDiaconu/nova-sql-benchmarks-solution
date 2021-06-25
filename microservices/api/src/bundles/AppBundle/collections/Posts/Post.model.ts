import { Schema, Is, a, an } from "@kaviar/validator-bundle";

@Schema()
export class Post {
  @Is(a.objectId().required())
  _id: any;

  @Is(a.string().required())
  title: string;

  @Is(a.string().required())
  desecription: string;
}
