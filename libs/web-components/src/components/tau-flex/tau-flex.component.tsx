// Dependencies
import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'tau-flex',
  styleUrl: 'tau-flex.styles.scss',
  shadow: true,
})
export class TauFlex {
  @Prop() gap: string;

  @Prop() flex: number;

  render() {
    const styles = {
      gap: this.gap,
      flex: this.flex.toString(),
    };

    return (
      <Host style={styles}>
        <slot />
      </Host>
    );
  }
}
