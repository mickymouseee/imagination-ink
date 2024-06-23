import { CommentCreateNestedManyWithoutStoriesInput } from "./CommentCreateNestedManyWithoutStoriesInput";

export type StoryCreateInput = {
  author?: string | null;
  comments?: CommentCreateNestedManyWithoutStoriesInput;
  content?: string | null;
  title?: string | null;
};
