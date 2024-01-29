// src/stories/ToggleSwitch.stories.ts
import { Story, Meta } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import ToggleSwitch from '../components/modules/ToggleSwitch.vue';

export default {
  title: 'Components/ToggleSwitch',
  component: ToggleSwitch,
  argTypes: {
    checked: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
    onChange: {
      action: 'change',
    },
  },
} as Meta;

interface ToggleSwitchProps {
  checked: boolean;
  label: string;
  onChange: (event: Event) => void;
}

const Template: Story<ToggleSwitchProps> = (args: any) => ({
  components: { ToggleSwitch },
  props: Object.keys(args),
  template: `<ToggleSwitch v-bind="$props" :checked="${args.checked}" @change="onChange" label="${args.label}" />`,
  methods: {
    onChange: action('change'),
  },
});

export const OnWithLabel: Story<ToggleSwitchProps> = Template.bind({});
OnWithLabel.args = {
  checked: true,
  label: "Enable Feature",
};

export const OffWithLabel: Story<ToggleSwitchProps> = Template.bind({});
OffWithLabel.args = {
  checked: false,
  label: "Enable Feature",
};

export const OnWithoutLabel: Story<ToggleSwitchProps> = Template.bind({});
OnWithoutLabel.args = {
  checked: true,
  label: '',
};

export const OffWithoutLabel: Story<ToggleSwitchProps> = Template.bind({});
OffWithoutLabel.args = {
  checked: false,
  label: '',
};
