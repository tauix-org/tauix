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

@Component({
  tag: 'tau-accordion-content',
  styleUrl: 'tau-accordion-content.styles.scss',
  shadow: false,
})
export class TauAccordionContent {
  @Prop() active: boolean;

  @Event() tauChange: EventEmitter<boolean>;

  @Element() host: HTMLTauAccordionBarElement;

  @Watch('active')
  toggleActive() {
    this.host.style.padding = '0px';

    if (this.active) {
      this.host.style.maxHeight = `${this.host.scrollHeight}px`;

      this.host.classList.add('active');
    } else {
      this.host.classList.remove('active');

      this.host.style.maxHeight = '0px';
    }

    this.tauChange.emit(this.active);
  }

  componentDidLoad() {
    this.toggleActive();
  }

  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
