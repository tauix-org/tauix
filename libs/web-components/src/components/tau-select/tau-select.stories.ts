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

const Template: Story<SelectArgs> = args => html`
  <tau-page>
    <tau-select style="width: 150px;" .placeholder=${args.placeholder}>
      ${args.options.map(
        option => html` <tau-option value=${option.value}>
          <tau-icon center url=${option.icon}></tau-icon>

          ${option.title}
        </tau-option>`
      )}
    </tau-select>
  </tau-page>
`;

export const Select: Story<SelectArgs> = Template.bind({});

Select.storyName = 'default';

Select.args = {
  options: [
    {
      title: 'Jinx',
      value: 0,
      icon: '/happy.svg',
    },
    {
      icon: '/arquive.svg',
      value: 1,
      title: 'Vi',
    },
  ],
};
