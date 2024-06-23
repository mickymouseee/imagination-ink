import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { StoryTitle } from "../story/StoryTitle";

export const CommentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Author" source="author" />
        <TextInput label="content" multiline source="content" />
        <ReferenceInput source="story.id" reference="Story" label="Story">
          <SelectInput optionText={StoryTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
