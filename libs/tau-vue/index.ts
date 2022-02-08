// Dependencies
// @ts-ignore
import { applyPolyfills, defineCustomElements } from 'tauix/stencil/loader';

export * from './forerunner/components';

applyPolyfills().then(() => {
  defineCustomElements(window, {
    ce: (eventName: string, opts: any) => {
      var eventLower = '';

      for (const ev of eventName) {
        ev == ev.toUpperCase()
          ? (eventLower += '-' + ev.toLocaleLowerCase())
          : (eventLower += ev);
      }

      return new CustomEvent(eventLower.toLowerCase(), opts);
    },
  } as any);
});
