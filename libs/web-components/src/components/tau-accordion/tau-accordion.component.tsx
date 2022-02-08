// Dependencies
import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Prop,
  Watch,
} from '@stencil/core';

@Component({
  tag: 'tau-accordion',
  styleUrl: 'tau-accordion.styles.scss',
  shadow: true,
})
export class TauAccordion {
  @Prop() open: boolean;

  @Event() tauChange: EventEmitter<boolean>;

  @Element() host: HTMLTauAccordionElement;

  accordionBar: HTMLTauAccordionBarElement;

  accordionContent: HTMLTauAccordionBarElement;


  @Watch('open')
  toggleOpen() {
    this.accordionBar.active = this.open;
    
    this.accordionContent.active = this.open;  
  }

  componentDidLoad() {
    const slot = this.host.shadowRoot.querySelector('slot');

    const slottedEls = slot.assignedElements();

    slottedEls.forEach((el: HTMLElement) => {
      const tagCurrentEl = el.tagName.toLocaleLowerCase();

      if (tagCurrentEl == 'tau-accordion-bar') {
        this.accordionBar = el as any;
      }

      if (tagCurrentEl == 'tau-accordion-content' && !this.accordionContent) {
        this.accordionContent = el as any;
      }
    });

    this.accordionBar.addEventListener('tauChange', (e: CustomEvent) => {
      this.open = e.detail;
    });

    this.toggleOpen()
  }

  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
