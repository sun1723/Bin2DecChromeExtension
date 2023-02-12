import * as React from "react";
import { ComponentMeta, Story } from "@storybook/react";
import Form from "../Form";
export default {
    title: 'form',
    component: Form,
}

export const FormStory: Story = (args) => <Form {...args} />;