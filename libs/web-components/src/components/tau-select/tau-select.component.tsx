// Dependencies
import {
  Component,
  Host,
  h,
  Prop,
  State,
  Listen,
  Element,
  Event,
  EventEmitter,
} from '@stencil/core';

// Assets
import chevron from '../../assets/icons/outline/chevron-down';

@Component({
  tag: 'tau-select',
  styleUrl: 'tau-select.styles.scss',
  shadow: true,
})
export class TauSelect {
  @Prop({ reflect: true }) placeholder: string = 'Selecione';

  @Prop({ reflect: true }) active: boolean;

  @State() open: boolean;

  @Event() tauChange: EventEmitter<number>;

  @Element() host: HTMLTauSelectElement;

  options: HTMLTauOptionElement[] = [];

  @Listen('click', { target: 'window' })
  listenSelectClick(e: MouseEvent) {
    const path = (e as any).path;
    const el = e.target as HTMLElement;
    const tag = el.tagName.toLocaleLowerCase();

    if (!path.includes(this.host) && tag != 'tau-option') {
      this.open = false;
    }
  }

  @Listen('active')
  toggleActive() {
    const wrapper = this.host.shadowRoot.querySelector('.wrapper');

    if (this.active) {
      wrapper.classList.add('active');
    } else {
      wrapper.classList.remove('active');
    }
  }

  toggleOption = (option: HTMLTauOptionElement) => {
    this.tauChange.emit(option.value);

    this.clearOptions();

    option.classList.add('selected');

    const wrapper: HTMLElement = this.host.shadowRoot.querySelector(
      '.select-header csg-flex'
    );

    wrapper.innerHTML = option.innerHTML;

    this.toggleOpen();
  };

  clearOptions = () => this.options.map(opt => opt.classList.remove('selected'));

  loadOptions = () => {
    const slot = this.host.shadowRoot.querySelector('slot');

    const els = Array.from(slot.assignedElements());

    els.map(el => {
      if (el.tagName.toLocaleLowerCase() == 'tau-option') {
        const option = el as HTMLTauOptionElement;

        this.options.push(option);

        option.addEventListener('click', () => this.toggleOption(option));
      } else {
        this.toggleOpen();
      }
    });
  };

  toggleOpen = () => (this.open = this.options?.length == 0 ? false : !this.open);

  componentDidLoad() {
    this.loadOptions();
  }

  render() {
    return (
      <Host>
        <div
          class={{
            wrapper: true,
            open: this.open,
            active: this.active,
          }}
        >
          <div class="select-header" onClick={this.toggleOpen}>
            <csg-flex>{this.placeholder}</csg-flex>

            <tau-icon svg={chevron} />
          </div>

          <div class="select-body">
            <slot />
          </div>
        </div>
      </Host>
    );
  }
}
