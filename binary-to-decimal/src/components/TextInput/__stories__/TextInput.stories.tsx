import * as React from "react";
import { ComponentMeta, Story } from "@storybook/react";
import {TextInput, textInputInterface} from "../TextInput";
export default {
    title: 'text input',
    component: TextInput,
}

export const TextInputStory: Story = (args) => <TextInput onSubmitForm={()=>{}} {...args} />;
