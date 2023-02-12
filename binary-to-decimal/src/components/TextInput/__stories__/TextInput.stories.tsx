import * as React from "react";
import { ComponentMeta, Story } from "@storybook/react";
import {TextInput} from "../TextInput";
export default {
    title: 'text input',
    component: TextInput,
}

export const TextInputStory: Story = (args) => <TextInput {...args} />;