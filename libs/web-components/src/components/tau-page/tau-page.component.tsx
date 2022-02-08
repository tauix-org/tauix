// Dependencies
import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'tau-page',
  styleUrl: 'tau-page.styles.scss',
  shadow: true,
})
export class TauPage {
  @Prop() withScroll: boolean = true;

  render() {
    return (
      <Host class={{ scroll: this.withScroll }}>
        <slot />
      </Host>
    );
  }
}
