// Dependencies
import { html } from 'lit-html';
import { Story } from '@storybook/web-components';

// Utils
import { TauOptionArgs } from './tau-option.model';

export default {
  title: 'Components/option',
  parameters: {
    status: {
      type: 'stable',
    },
  },
};

const Template: Story<TauOptionArgs> = args => html`
  <tau-page>
    <tau-option .value=${args.value}>
      <tau-icon center name="check"></tau-icon>

      Entrar
    </tau-option>
  </tau-page>
`;

export const Option: Story<TauOptionArgs> = Template.bind({});

Option.storyName = 'default';

Option.args = {
  value: 2,
};
