// Dependencies
import {
  Component,
  Host,
  h,
  Element,
  Prop,
  Event,
  EventEmitter,
} from '@stencil/core';

// Utils
import { TauSize } from '../../utils/types';

@Component({
  tag: 'tau-switch',
  styleUrl: 'tau-switch.styles.scss',
  shadow: true,
})
export class TauSwitch {
  @Prop({ reflect: true, mutable: true }) checked: boolean;

  @Prop({ reflect: true }) size: TauSize = 'medium';

  @Prop({ reflect: true }) disable: boolean;

  @Event() tauChange: EventEmitter<boolean>;

  @Element() host: HTMLTauSwitchElement;

  onToggle = () => {
    this.checked = !this.checked;

    this.tauChange.emit(this.checked);
  };

  componentDidLoad() {
    this.host.addEventListener('click', () => !this.disable && this.onToggle());
  }

  render() {
    return (
      <Host>
        <div
          class={{
            wrapper: true,
            checked: this.checked,
            [this.size]: !!this.size,
            disable: this.disable,
          }}
        >
          <div />
        </div>
      </Host>
    );
  }
}
