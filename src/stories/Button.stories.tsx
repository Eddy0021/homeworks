// src/stories/Button.stories.ts
import { Story, Meta } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import Button from '../components/modules/Button.vue';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    label: {
      control: 'text',
    },
    type: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'disabled'],
      },
    },
    onClick: {
      action: 'clicked',
    },
    disabled: {
      control: 'boolean',
    },
  },
} as Meta;

interface ButtonProps {
  label: string;
  type: 'primary' | 'secondary' | 'disabled';
  onClick: () => void;
  disabled: boolean;
}

const Template: Story<ButtonProps> = (args: any) => ({
  components: { Button },
  props: Object.keys(args),
  template: `<Button v-bind="$props" type="${args.type}" @click="onClick">${args.label}</Button>`,
  methods: {
    onClick: action('button-clicked'),
  },
});

export const Primary: Story<ButtonProps> = Template.bind({});
Primary.args = {
  type: 'primary',
  label: 'Primary Button',
};

export const Secondary: Story<ButtonProps> = Template.bind({});
Secondary.args = {
  type: 'secondary',
  label: 'Secondary Button',
};

export const Disabled: Story<ButtonProps> = Template.bind({});
Disabled.args = {
  disabled: true,
  type: 'disabled',
  label: 'Disabled Button',
};
