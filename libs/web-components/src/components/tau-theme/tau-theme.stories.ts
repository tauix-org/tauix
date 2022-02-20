// Dependencies
import { html } from 'lit-html';
import { Story } from '@storybook/web-components';

export default {
  title: 'Components/theme',
  parameters: {
    status: {
      type: 'stable',
    },
  },
};

const Template: Story = () => html`
  <tau-theme theme="tau-orange">
    <tau-button>Entrar</tau-button>
  </tau-theme>
`;

export const Theme: Story = Template.bind({});

Theme.storyName = 'default';

Theme.args = {
};
