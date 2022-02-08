// Dependencies
import { Component, Host, h, Prop, State, Listen, Element, Event, EventEmitter } from '@stencil/core';

// Utils
import { SelectOption } from './tau-select.model';
import { TauVariant } from '../../utils/types';

// Assets
import chevron from '../../assets/icons/outline/chevron-down';

@Component({
  tag: 'tau-select',
  styleUrl: 'tau-select.styles.scss',
  shadow: true,
})
export class TauSelect {
  @Prop({ reflect: true }) color: TauVariant;

  @Prop({ reflect: false, mutable: true }) options: SelectOption[] = [];

  @Prop({ reflect: false, mutable: true }) option: SelectOption;

  @Prop({ reflect: true }) placeholder: string = 'Selecione';

  @Prop({ reflect: true }) active: boolean;

  @State() open: boolean;

  @Event() tauChange: EventEmitter<object>;

  @Element() host: HTMLTauSelectElement;

  @Listen('click', { target: 'window' })
  listenSelectClick(e: MouseEvent) {
    const path = (e as any).path;

    if (!path.includes(this.host)) {
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

  toggleOption = (option: SelectOption) => {
    this.option = option;

    this.tauChange.emit(option);

    this.toggleOpen();
  };

  toggleOpen = () => (this.open = this.options?.length == 0 ? false : !this.open);

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
            <div>
              {this.option?.icon && <tau-icon url={this.option.icon} />}

              {this.option?.title || this.placeholder}
            </div>

            <tau-icon svg={chevron} />
          </div>

          <div class="select-body">
            {this.options &&
              this.options.map((option: SelectOption) => (
                <div
                  class={{
                    'select-option': true,
                    selected: option == this.option,
                  }}
                  onClick={() => this.toggleOption(option)}
                >
                  {option?.icon && <tau-icon url={option.icon} />}

                  {option.title}
                </div>
              ))}
          </div>
        </div>
      </Host>
    );
  }
}
