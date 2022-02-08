// Dependencies
import { Component, Host, h, Prop, Element, Watch, Event, EventEmitter } from '@stencil/core';

// Utils
import { TauAnchor } from '../../utils/types';

@Component({
  tag: 'tau-drawer',
  styleUrl: 'tau-drawer.styles.scss',
  shadow: true,
})
export class TauDrawer {
  @Prop({ reflect: true }) open: boolean;

  @Prop({ reflect: true }) anchor: TauAnchor = 'right';

  @Prop({ reflect: true }) zIndex: number = 10;

  @Prop({ reflect: true }) blurShadow: boolean;

  @Prop({ reflect: true }) shadow: boolean = true;

  @Prop({ reflect: true }) color: string;

  @Event() tauClose: EventEmitter<boolean>;

  @Element() host: HTMLTauDrawerElement;

  @Watch('open')
  toggleOpen() {
    const container = this.host.shadowRoot.querySelector('.wrapper');

    if (this.open) {
      container.classList.add('open');
    } else {
      container.classList.remove('open');
    }
  }

  closeDrawer = (e: any) => {
    const contentDrawer = this.host.shadowRoot.querySelector('.drawer');

    if (!e.path.includes(contentDrawer)) {
      this.tauClose.emit(true);
    }
  };

  render() {
    const styleWrapper = {
      background: this.color,
      zIndex: this.zIndex.toString(),
    };

    return (
      <Host>
        <div
          class={{
            wrapper: true,
            open: this.open,
            shadow: this.shadow,
            blurShadow: this.blurShadow,
            [this.anchor]: !!this.anchor,
          }}
          onClick={(e: MouseEvent) => this.closeDrawer(e)}
          style={styleWrapper}
        >
          <div class="drawer">
            <slot />
          </div>
        </div>
      </Host>
    );
  }
}
