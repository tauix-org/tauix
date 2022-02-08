// Dependencies
import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Prop,
  State,
  Watch,
} from '@stencil/core';

// Utils
import { getColorContrast } from '../../utils/functions';
import { TauSize } from '../../utils/types';

@Component({
  tag: 'tau-checkbox',
  styleUrl: 'tau-checkbox.styles.scss',
  shadow: true,
})
export class TauCheckbox {
  @Prop({ reflect: true, mutable: true }) checked: boolean;

  @Prop({ reflect: true }) disable: boolean;

  @Prop({ reflect: true }) size: TauSize = 'medium';

  @Prop({ reflect: true }) icon: string = 'check';

  @State() color: string;

  @Event() tauChange: EventEmitter<boolean>;

  @Element() host: HTMLTauCheckboxElement;

  iconCheck: HTMLTauIconElement;

  checkboxWrapper: HTMLElement;

  @Watch('color')
  toggleColor() {
    this.iconCheck.style.color = this.color;
  }

  @Watch('icon')
  validateIconName() {
    this.icon.trim() == '' && (this.icon = 'check');
  }

  @Watch('checked')
  changeColor() {
    if (this.checked) {
      this.applyColor();
    } else {
      this.color = 'rgb(0,0,0,0)';
    }
  }

  toggleCheck = () => {
    this.checked = !this.checked;

    this.tauChange.emit(this.checked);
  };

  componentDidLoad() {
    this.iconCheck = this.host.shadowRoot.querySelector('tau-icon');
    this.checkboxWrapper = this.host.shadowRoot.querySelector('div');

    this.validateIconName();
    this.changeColor();

    window.addEventListener('tauLimn', () => this.changeColor());
  }

  applyColor = () => {
    const wrapperColor = getComputedStyle(this.checkboxWrapper).getPropertyValue(
      '--tau-primary'
    );

    this.color = wrapperColor ? getColorContrast(wrapperColor) : '#FFF';
  };

  render() {
    return (
      <Host>
        <div
          onClick={this.toggleCheck}
          class={{
            checked: this.checked,
            [this.size]: !!this.size,
          }}
        >
          <tau-icon name={this.icon} />
        </div>
      </Host>
    );
  }
}
