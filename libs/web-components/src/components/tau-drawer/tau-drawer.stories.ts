// Dependencies
import { html } from 'lit-html';
import { Story } from '@storybook/web-components';

export default {
  title: 'Components/drawer',
  parameters: {
    status: {
      type: 'stable',
    },
  },
};

const Template: Story = args => html`
  <tau-page>
    <style>
      .drawer-wrapper {
        width: 200px;
        height: 100%;

        padding: 20px;

        display: flex;
        align-items: center;

        font-family: var(--tau-font-family);
        font-size: 13px;
        color: var(--tau-text);
      }

      .drawer-wrapper tau-checkbox {
        margin-right: 20px;
      }
    </style>
    <tau-button @click=${toggleDrawer}>Drawer</tau-button>

    <tau-drawer .open=${args.open} shadow @tauClose=${toggleDrawer}>
      <div class="drawer-wrapper">
        <tau-checkbox></tau-checkbox>

        Show
      </div>
    </tau-drawer>
  </tau-page>
`;

const toggleDrawer = () => {
  const drawer: any = document.querySelector('tau-drawer');

  drawer.open = !drawer.open;
};

export const Drawer: Story = Template.bind({});

Drawer.storyName = 'default';

Drawer.args = {
  open: false,
};
