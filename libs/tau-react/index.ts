// Dependencies
// @ts-ignore
import { applyPolyfills, defineCustomElements } from 'tauix/stencil/loader';

export * from './forerunner/components';

applyPolyfills().then(() => {
  defineCustomElements(window);
});
