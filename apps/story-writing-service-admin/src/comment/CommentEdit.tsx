import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { StoryTitle } from "../story/StoryTitle";

export const CommentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Author" source="author" />
        <TextInput label="content" multiline source="content" />
        <ReferenceInput source="story.id" reference="Story" label="Story">
          <SelectInput optionText={StoryTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
