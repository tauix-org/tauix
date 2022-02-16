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

  setContrast = () => {
    const primary = getComputedStyle(this.host as Element).getPropertyValue(
      '--tau-primary'
    );

    const color = getColorContrast(primary);

    if (color) {
      this.host.style.setProperty('--tau-text', color);
    }
  };

  hydrateTheme = () => {
    const eventLimn = document.createEvent('CustomEvent');

    eventLimn.initEvent('tauLimn', true, false);
  };

  componentDidLoad() {
    this.toggleTheme(this.theme);

    this.hydrateTheme();

    if (this.constrast) {
      this.setContrast();
    }
  }

  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
