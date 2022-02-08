// Dependencies
import { html } from 'lit-html';
import { Story } from '@storybook/web-components';

export default {
  title: 'Components/icon',
  parameters: {
    status: {
      type: 'stable',
    },
  },
  argTypes: {
    fill: {
      options: ['outline', 'solid'],
      control: { type: 'radio' },
    },
  },
};

const Template: Story = args => html`
  <style>
    tau-icon {
      width: 24px;
      height: 24px;

      display: grid;
      place-items: center;

      color: ${args.color};
    }
  </style>
  <div>
    <tau-icon .url=${args.url} .fill=${args.fill} .svg=${args.svg} .name=${args.name}></tau-icon>
  </div>
`;

export const Icon: Story = Template.bind({});

Icon.storyName = 'default';

Icon.args = {
  name: 'archive',
  url: '',
  svg: '',
  color: '#303030'
};
