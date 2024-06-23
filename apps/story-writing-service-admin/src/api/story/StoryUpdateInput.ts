import { CommentUpdateManyWithoutStoriesInput } from "./CommentUpdateManyWithoutStoriesInput";

export type StoryUpdateInput = {
  author?: string | null;
  comments?: CommentUpdateManyWithoutStoriesInput;
  content?: string | null;
  title?: string | null;
};
