// Dependencies
import {
  Component,
  Host,
  h,
  Prop,
  Watch,
  Element,
  EventEmitter,
  Event,
  Listen,
} from '@stencil/core';
import { getColorContrast } from '../../utils/functions';

@Component({
  tag: 'tau-theme',
  styles: 'tau-theme.styles.scss',
  shadow: true,
})
export class TauTheme {
  @Prop() theme: string = 'tau-light';

  @Prop() constrast: boolean = true;

  @Event() tauLimn: EventEmitter<object>;

  @Element() host: HTMLTauThemeElement;

  els: string[] = ['tau-button', 'tau-checkbox'];

  @Watch('theme')
  toggleTheme(e: string) {
    const clss = this.host.classList;

    clss.forEach((cls: string) => {
      if (cls.includes('tau-')) {
        this.host.classList.remove(cls);
      }
    });

    this.host.classList.add(e || 'tau-light');

    this.hydrateTheme();

    this.tauLimn.emit({ old: this.theme, current: e });
  }

  @Listen('tauContrast')
  appyContrast() {
    this.setContrast();
  }

  setContrast = () => {
    if (this.constrast) {
      const primary = getComputedStyle(this.host as Element).getPropertyValue(
        '--tau-primary'
      );

      const color = getColorContrast(primary);

      if (color) {
        this.els.forEach(el => {
          const cels = this.host.querySelectorAll(el);

          cels.forEach((cel: HTMLElement) =>
            cel.style.setProperty('--tau-text', getColorContrast(primary))
          );
        });
      }
    }
  };

  hydrateTheme = () => {
    const eventLimn = document.createEvent('CustomEvent');

    eventLimn.initEvent('tauLimn', true, false);
  };

  connectedCallback() {
    this.setContrast();
  }

  componentDidLoad() {
    this.toggleTheme(this.theme);

    this.hydrateTheme();

    this.setContrast();

    window.addEventListener('tauLimn', () => this.setContrast());
  }

  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
