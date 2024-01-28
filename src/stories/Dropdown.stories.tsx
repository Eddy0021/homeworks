// src/stories/Dropdown.stories.ts
import { Story, Meta } from '@storybook/vue';
import Dropdown from '../components/modules/Dropdown.vue';
import options from './options';

export default {
  component: Dropdown,
  title: 'Components/Dropdown',
  argTypes: {
    options: {
      control: 'object',
    },
    label: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
  },
} as Meta;

interface DropdownProps {
  options: any[];
  label?: string;
  disabled?: boolean;
}

const Template: Story<DropdownProps> = (args: any) => ({
  components: { Dropdown },
  setup() {
    return { args };
  },
  template: '<Dropdown v-bind="args" />',
});

export const Default: Story<DropdownProps> = Template.bind({});
Default.args = { options };

export const withLabel: Story<DropdownProps> = Template.bind({});
withLabel.args = {
  options,
  label: 'List of authors',
};

export const ReadOnly: Story<DropdownProps> = Template.bind({});
ReadOnly.args = {
  options,
  disabled: true,
};
