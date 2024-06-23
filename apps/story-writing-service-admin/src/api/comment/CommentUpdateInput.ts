import { StoryWhereUniqueInput } from "../story/StoryWhereUniqueInput";

export type CommentUpdateInput = {
  author?: string | null;
  content?: string | null;
  story?: StoryWhereUniqueInput | null;
};
