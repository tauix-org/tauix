// Dependencies
import { Component, Host, h, Element, Prop } from '@stencil/core';

@Component({
  tag: 'tau-ripple',
  styleUrl: 'tau-ripple.styles.scss',
  shadow: true,
})
export class TauRipple {
  @Prop() disable: boolean;

  @Element() host: HTMLTauRippleElement;

  background: string;

  createRipple = (event: any) => {
    this.background = this.host.style.getPropertyValue('--tau-ripple');

    const circle = document.createElement('span');

    circle.style.background = this.background;

    const diameter = Math.max(this.host.clientWidth, this.host.clientHeight);

    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;

    circle.style.left = `${event.clientX - this.host.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - this.host.offsetTop - radius}px`;

    circle.classList.add('ripple');

    const ripple = this.host.shadowRoot.querySelectorAll('.ripple')[0];

    if (ripple) {
      ripple.remove();
    }

    this.host.shadowRoot.appendChild(circle);
  };

  componentDidLoad() {
    this.background = window.getComputedStyle(this.host).backgroundColor;

    this.host.addEventListener('click', (e: MouseEvent) => !this.disable && this.createRipple(e));
  }

  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
