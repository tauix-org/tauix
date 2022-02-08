// Dependencies
import {
  Component,
  Host,
  h,
  Element,
  Prop,
  Watch,
  Event,
  EventEmitter,
} from '@stencil/core';

// Assets
import arrowBottom from '../../assets/icons/outline/chevron-down';

@Component({
  tag: 'tau-accordion-bar',
  styleUrl: 'tau-accordion-bar.styles.scss',
  shadow: false,
})
export class TauAccordionBar {
  @Prop() active: boolean;

  @Event() tauChange: EventEmitter<boolean>;

  @Element() host: HTMLTauAccordionBarElement;

  @Watch('active')
  toggleActive() {
    if (this.active) {
      this.host?.classList?.add('active');
    } else {
      this.host?.classList?.remove('active');
    }
  }

  componentDidLoad() {
    this.host.addEventListener('click', () => {
      this.active = !this.active;

      this.tauChange.emit(this.active);
    });
  }

  render() {
    return (
      <Host>
        <slot />

        <tau-icon svg={arrowBottom} />
      </Host>
    );
  }
}
