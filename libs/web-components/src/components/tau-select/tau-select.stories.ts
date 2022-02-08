// Dependencies
import { html } from 'lit-html';
import { Story } from '@storybook/web-components';

// Utils
import { SelectArgs } from './tau-select.model';

export default {
  title: 'Components/select',
  parameters: {
    status: {
      type: 'stable',
    },
  },
};

const Template: Story<SelectArgs> = (args) => html`
  <tau-page>
    <tau-select
      style="width: 150px;"
      .placeholder=${args.placeholder}
      .options=${args.options}
    ></tau-select>
  </tau-page>
`;

export const Select: Story<SelectArgs> = Template.bind({});

Select.storyName = 'default';

Select.args = {
  options: [
    {
      title: 'Jinx',
      icon: '/happy.svg'
    },
    {
      icon: '/arquive.svg',
      title: 'Vi',
    },
  ],
};
