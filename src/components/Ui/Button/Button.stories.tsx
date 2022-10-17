import { AddDuotoneIcon, BookOpenIcon } from "@/components/Icons";
import { Button as ButtonComponent } from "@/components/Ui";
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";

export default {
  title: "Components/UI/Button",
  component: ButtonComponent,
  argTypes: {
    color: {
      options: ["black", "green", "blue", "red", "gray"],
      control: { type: "radio" },
    },
    icon: { table: { disable: true } },
    onClick: {
      action: "clicked",
    },
  },
} as ComponentMeta<typeof ButtonComponent>;

const Template: ComponentStory<typeof ButtonComponent> = (args) => <ButtonComponent {...args} />;

export const Button = Template.bind({});

Button.args = {
  variant: "link",
  children: "Button",
  color: "black",
  size: "md",
  block: false,
  isLoading: false,
};

const runTest = async (canvasElement: HTMLElement) => {
  const canvas = within(canvasElement);

  const button = await canvas.getByRole("button");
  await userEvent.click(button);
};

Button.play = async ({ canvasElement }) => {
  await runTest(canvasElement);
};

export const ButtonWithIconAndLabel = Template.bind({});

ButtonWithIconAndLabel.args = {
  ...Button.args,
  icon: <AddDuotoneIcon />,
};

ButtonWithIconAndLabel.play = async ({ canvasElement }) => {
  await runTest(canvasElement);
};

export const ButtonWithIcon = Template.bind({});

ButtonWithIcon.args = {
  ...Button.args,
  icon: <BookOpenIcon />,
  children: "",
  "aria-label": "loading",
};

ButtonWithIcon.play = async ({ canvasElement }) => {
  await runTest(canvasElement);
};
