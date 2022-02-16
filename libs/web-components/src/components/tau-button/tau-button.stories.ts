// Dependencies
import { html } from 'lit-html';
import { Story } from '@storybook/web-components';

export default {
  title: 'Components/button',
  parameters: {
    status: {
      type: 'stable',
    },
  },
  argTypes: {
    variant: {
      options: ['outline', 'solid'],
      control: { type: 'radio' },
    },
    type: {
      options: ['submit', 'button', 'reset'],
      control: { type: 'radio' },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
    bold: {
      options: [100, 200, 300, 400, 500, 600, 700, 800],
      control: { type: 'select' },
    },
  },
};

const Template: Story = args => html`
  <tau-theme>
    <tau-button
      @tauSubmit=${() => alert('Request Sumbit Form')}
      @tauReset=${() => alert('Request Reset Form')}
      .disable=${args.disable}
      .block=${args.block}
      .bold=${args.bold}
      .type=${args.type}
      .href=${args.href}
      .size=${args.size}
      .variant=${args.variant}
    >
      Entrar
    </tau-button>
  </tau-theme>
`;

export const Button: Story = Template.bind({});

Button.storyName = 'default';

Button.args = {
  type: 'button',
  variant: 'solid',
  disable: false,
  block: false,
  href: '',
  size: 'medium',
  bold: 400,
};
