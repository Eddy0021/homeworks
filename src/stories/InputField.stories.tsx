// src/stories/InputField.stories.ts
import { Story, Meta } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import InputField from '../components/modules/InputField.vue';

export default {
  title: 'Components/InputField',
  component: InputField,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['text', 'password'],
      },
    },
    disabled: {
      control: 'boolean',
    },
    placeholder: {
      control: 'text',
    },
    onInput: {
      action: 'input',
    },
  },
} as Meta;

interface InputFieldProps {
  type: 'text' | 'password';
  disabled: boolean;
  placeholder: string;
  onInput: (event: Event) => void;
}

const Template: Story<InputFieldProps> = (args: any) => ({
  components: { InputField },
  props: Object.keys(args),
  template: `<InputField v-bind="$props" type="${args.type}" :disabled="${args.disabled}" @input="onInput" />`,
  methods: {
    onInput: action('input'),
  },
});

export const Text: Story<InputFieldProps> = Template.bind({});
Text.args = {
  disabled: false,
  type: 'text',
  placeholder: 'Enter text',
};

export const Password: Story<InputFieldProps> = Template.bind({});
Password.args = {
  disabled: false,
  type: 'password',
  placeholder: 'Enter password',
};

export const Disabled: Story<InputFieldProps> = Template.bind({});
Disabled.args = {
  disabled: true,
};
