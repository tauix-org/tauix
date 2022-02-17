// Dependencies
import { html } from 'lit-html';
import { Story } from '@storybook/web-components';

export default {
  title: 'Components/switch',
  parameters: {
    status: {
      type: 'stable',
    },
  },
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
  },
};

const Template: Story = args => html`
  <tau-page>
    <tau-switch checked=${args.checked} disable=${args.disable} size=${args.size}></tau-switch>
  </tau-page>
`;

export const Switch: Story = Template.bind({});

Switch.storyName = 'default';

Switch.args = {
  checked: false,
  disable: false,
  size: 'small',
};
