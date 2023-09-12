import RegButton from './Button.vue';

export default {
  title: 'Components/Button',
  component: RegButton,
  //👇 Enables auto-generated documentation for the component story
  tags: ['autodocs'],
  argTypes: {
    onClick: {
      table: {
        disable: true,
      },
    },
    fullWidth: {
      type: 'boolean',
    },
  },
};

export const Primary = {
  args: {
    mode: 'default',
    type: 'primary',
    label: 'Button',
    size: 'default',
  },
};

export const Secondary = {
  args: {
    mode: 'default',
    type: 'secondary',
    label: 'Button',
    size: 'default',
  },
};

export const Text = {
  args: {
    mode: 'default',
    type: 'text',
    label: 'Button',
    size: 'default',
  },
};