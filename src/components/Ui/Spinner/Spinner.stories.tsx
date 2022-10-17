import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { Spinner as SpinnerComponent } from "@/components/Ui";

export default {
  title: "Components/UI/Spinner",
  component: SpinnerComponent,
  argTypes: {
    width: {
      type: "number",
      defaultValue: 20,
    },
    height: {
      type: "number",
      defaultValue: 20,
    },
    color: {
      defaultValue: "#000",
      control: {
        type: "color",
      },
    },
  },
} as ComponentMeta<typeof SpinnerComponent>;

const Template: ComponentStory<typeof SpinnerComponent> = (args) => <SpinnerComponent {...args} />;

export const Spinner = Template.bind({});
