import {
  Component,
  Host,
  h,
  Event,
  Element,
  Prop,
  EventEmitter,
  State,
} from '@stencil/core';

// Utils
import { TauBold, TauButtonType, TauSize, TauVariant } from '../../utils/types';

@Component({
  tag: 'tau-button',
  styleUrl: 'tau-button.styles.scss',
  shadow: true,
})
export class TauButton {
  @Prop({ reflect: true }) type: TauButtonType = 'button';

  @Prop({ reflect: true }) bold: TauBold = '400';

  @Prop({ reflect: true }) size: TauSize = 'medium';

  @Prop({ reflect: true }) disable: boolean;

  @Prop({ reflect: true }) variant: TauVariant = 'solid';

  @Prop({ reflect: true }) block: boolean;

  @Prop({ reflect: true }) href: string;

  @State() background: string;

  @Event() tauSubmit: EventEmitter<boolean>;

  @Event() tauReset: EventEmitter<boolean>;

  @Event() tauContrast: EventEmitter<boolean>;

  @Element() host: HTMLTauButtonElement;

  button: HTMLElement;

  componentDidLoad() {
    this.host.addEventListener('click', this.clickButton);

    this.tauContrast.emit(true);

    this.button = this.host.shadowRoot.querySelector('button, a');
  }
  clickButton = () => {
    if (!this.disable) {
      this.type == 'reset' && this.tauReset.emit(true);
      this.type == 'submit' && this.tauSubmit.emit(true);
    }
  };

  render() {
    const styles = {
      fontWeight: this.bold,
    };

    const El = this.href ? 'a' : 'button';

    return (
      <Host class={{ [this.variant]: !!this.variant }}>
        <tau-ripple disable={this.disable}>
          <El
            href={this.href}
            style={styles}
            class={{
              [this.type]: !!this.type,
              [this.size]: !!this.size,
              disable: this.disable,
              block: this.block,
            }}
          >
            <slot />
          </El>
        </tau-ripple>
      </Host>
    );
  }
}
