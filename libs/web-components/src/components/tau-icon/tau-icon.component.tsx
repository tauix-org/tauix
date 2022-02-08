// Dependencies
import { Component, Host, h, Prop, Element, Watch } from '@stencil/core';

// Utils
import { applyStyles } from '../../utils/functions';

@Component({
  tag: 'tau-icon',
  styleUrl: 'tau-icon.styles.scss',
})
export class tauixcon {
  @Prop({ reflect: true }) url: string = '';

  @Prop({ reflect: true }) fill: 'outline' | 'solid' = 'outline';

  @Prop({ reflect: true }) name: string;

  @Prop({ reflect: true }) width: number;

  @Prop({ reflect: true }) height: number;

  @Prop({ reflect: true }) alt: string;

  @Prop() svg: string;

  @Element() host: HTMLtauixconElement;

  @Watch('url')
  async makeIcon() {
    if (this.url.split('.').includes('svg')) {
      const res = await fetch(`./${this.url}`);

      this.host.innerHTML = await res.text();
    } else if (this.svg) {
      this.host.innerHTML = this.svg;
    }
  }

  @Watch('name')
  @Watch('fill')
  makeNameIcon() {
    if (this.name) {
      try {
        const icon = require(`../assets/icons/${this.fill}/${this.name}.ts`);

        this.host.innerHTML = icon.default;
      } catch (error) {
        throw new Error("We couldn't find your icon 🦄");
      }
    }
  }

  componentDidLoad() {
    this.makeIcon();

    this.makeNameIcon();
  }

  render() {
    const styles = {
      width: `${this.width}px`,
      height: `${this.height ? this.height : this.svg && this.width}px`,
    };

    applyStyles(styles, this.host);

    return (
      <Host>
        <img src={this.url} alt={this.alt} />
      </Host>
    );
  }
}
