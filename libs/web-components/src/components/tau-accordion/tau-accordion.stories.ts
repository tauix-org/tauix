// Dependencies
import { html } from 'lit-html';
import { Story } from '@storybook/web-components';

export default {
  title: 'Components/accordion',
  parameters: {
    status: {
      type: 'stable',
    },
  },
};

const Template: Story = (args) => html`
  <style>
    tau-accordion-bar div {
      font-family: var(--tau-font-family);
      font-size: 13px;
      color: var(--tau-text);
    }

    tau-accordion-content div {
      padding: 5px 20px;
    }
  </style>
  <tau-page>
    <tau-accordion .open=${args.open}>
      <tau-accordion-bar>
        <div>Lorem Ipsum is simply dummy text of the printing</div>
      </tau-accordion-bar>

      <tau-accordion-content>
        <div>
          <tau-button>This My Accordion</tau-button>
        </div>
      </tau-accordion-content>
    </tau-accordion>
  </tau-page>
`;

export const Accordion: Story = Template.bind({});

Accordion.storyName = 'default';

Accordion.args = {
  open: false,
};
