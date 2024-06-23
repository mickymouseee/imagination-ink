import { StoryWhereUniqueInput } from "../story/StoryWhereUniqueInput";

export type CommentCreateInput = {
  author?: string | null;
  content?: string | null;
  story?: StoryWhereUniqueInput | null;
};
