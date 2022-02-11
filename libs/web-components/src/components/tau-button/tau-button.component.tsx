import {
  Component,
  Host,
  h,
  Event,
  Element,
  Prop,
  EventEmitter,
  Watch,
} from '@stencil/core';

// Utils
import { applyStyles, applyStyleSlotted, getColorContrast } from '../../utils/functions';
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

  @Event() tauSubmit: EventEmitter<boolean>;

  @Event() tauReset: EventEmitter<boolean>;

  @Element() host: HTMLTauButtonElement;

  button: HTMLElement;

  @Watch('variant')
  applyColorStyles() {
    const primary = getComputedStyle(this.button as Element, null).getPropertyValue(
      '--tau-primary'
    );

    if (this.variant == 'solid') {
      applyStyles(
        {
          background: primary,
          color: getColorContrast(primary),
        },
        this.button
      );
    } else {
      applyStyles(
        {
          background: 'rgba(0,0,0,0)',
        },
        this.button
      );

      applyStyleSlotted(
        { color: 'var(--tau-primary)' },
        this.button.querySelector('slot')
      );
    }
  }

  componentDidLoad() {
    this.host.addEventListener('click', this.clickButton);

    this.button = this.host.shadowRoot.querySelector('button, a');

    this.applyColorStyles();

    window.addEventListener('tauTheme', this.applyColorStyles);
  }

  clickButton = () => {
    !this.disable &&
      (this.type == 'submit' && this.tauSubmit.emit(true),
      this.type == 'reset' && this.tauReset.emit(true));
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
