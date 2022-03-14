// Dependencies
// @ts-ignore
import { applyPolyfills, defineCustomElements } from 'tauix/stencil/loader';

export * from './forerunner/components';

applyPolyfills().then(() => {
  defineCustomElements(window, {
    ce: (eventName: string, opts: any) => {
      return new CustomEvent(
        eventName
          .split('')
          .map(e => (e == e.toUpperCase() ? '-' + e.toLocaleLowerCase() : e))
          .join(''),
        opts
      );
    },
  } as any);
});
