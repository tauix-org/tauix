// Dependencies
import { html } from 'lit-html';
import { Story } from '@storybook/web-components';

export default {
  title: 'Components/option',
  parameters: {
    status: {
      type: 'beta',
    },
  },
};

const Template: Story = () => html`
  <tau-page>
    <tau-option>
      
    </tau-option>
  </tau-page>
`;

export const Option: Story = Template.bind({});

Option.storyName = 'default';

Option.args = {
  open: false,
};
