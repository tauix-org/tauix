// Dependencies
import { Component, Host, h, Element } from '@stencil/core';

// Utils
import { transportAttributes } from '../../utils/functions';

@Component({
  tag: 'tau-option',
  styleUrl: 'tau-option.styles.scss',
  shadow: true,
})
export class TauOption {
  @Element() host: HTMLTauOptionElement;

  componentDidLoad() {
    const flex = this.host.shadowRoot.querySelector('tau-flex');

    transportAttributes(this.host, flex);
  }

  render() {
    return (
      <Host>
        <tau-flex class="wrapper">
          <slot />
        </tau-flex>
      </Host>
    );
  }
}
