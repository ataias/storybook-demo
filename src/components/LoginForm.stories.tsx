import type { Meta, StoryObj } from '@storybook/react';
import { fn, userEvent, within } from '@storybook/test';
import { LoginForm } from './LoginForm';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/LoginForm',
  component: LoginForm,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    handleSubmit: fn(),
  },
};

export const Valid: Story = {
  args: {
    handleSubmit: fn(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);


    // Can import from '@storybook/test'
    // logRoles(canvasElement);
    const emailInput = canvas.getByLabelText(/email/i, {
      selector: 'input',
    });

    await userEvent.type(emailInput, 'example-email@email.com', {
      // This would be a delay between characters
      // delay: 100,
    });

    const passwordInput = canvas.getByLabelText(/password/i, {
      selector: 'input',
    });

    await userEvent.type(passwordInput, 'ExamplePassword', {
      // This would be a delay between characters
      // delay: 100,
    });
    // See https://storybook.js.org/docs/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
    const submitButton = canvas.getByRole('button');

    await userEvent.click(submitButton);
  }
};


export const Invalid: Story = {
  args: {
    handleSubmit: fn(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const submitButton = canvas.getByRole('button');

    await userEvent.click(submitButton);
  }
};
