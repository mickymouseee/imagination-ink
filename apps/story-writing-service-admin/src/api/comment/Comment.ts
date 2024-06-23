import { Story } from "../story/Story";

export type Comment = {
  author: string | null;
  content: string | null;
  createdAt: Date;
  id: string;
  story?: Story | null;
  updatedAt: Date;
};
