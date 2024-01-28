// src/stories/Alert.stories.ts
import { Story, Meta } from '@storybook/vue';
import Alert from '../components/modules/Alert.vue';

export default {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['success', 'warning', 'error', 'closable'],
      },
    },
    message: {
      control: 'text',
    },
    closable: {
      control: 'boolean',
    },
  },
} as Meta;

interface AlertProps {
  type: 'success' | 'warning' | 'error' | 'closable';
  message: string;
  closable: boolean;
}

const Template: Story<AlertProps> = (args : any) => ({
  components: { Alert },
  props: Object.keys(args),
  template: `<Alert type="${args.type}" message="${args.message}" :closable="${args.closable}"></Alert>`,
});

export const Success: Story<AlertProps> = Template.bind({});
Success.args = {
  closable: false,
  type: 'success',
  message: 'This is a success message',
};

export const Warning: Story<AlertProps> = Template.bind({});
Warning.args = {
  closable: false,
  type: 'warning',
  message: 'This is a warning message',
};

export const Error: Story<AlertProps> = Template.bind({});
Error.args = {
  closable: false,
  type: 'error',
  message: 'This is an error message',
};

export const Closable: Story<AlertProps> = Template.bind({});
Closable.args = {
  closable: true,
  type: 'closable',
  message: 'This is a closable alert',
};
