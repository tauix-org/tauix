// Dependencies
import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { vueOutputTarget } from '@stencil/vue-output-target';
import { sass } from '@stencil/sass';

const excludeComponents = [];

export const config: Config = {
  namespace: 'tauix',
  outputTargets: [
    {
      type: 'dist',
      dir: 'dist/stencil',
      copy: [
        { src: 'themes', dest: '../../core/themes' },
        {
          src: 'assets',
          dest: '../assets',
        },
      ],
    },
    {
      type: 'dist-custom-elements',
    },
    { type: 'dist-hydrate-script', dir: 'dist/hydrate' },
    reactOutputTarget({
      componentCorePackage: 'tauix',
      proxiesFile: '../tau-react/forerunner/components.ts',
      loaderDir: 'stencil/loader',
      includeDefineCustomElements: true,
      includePolyfills: true,
      excludeComponents,
    }),
    vueOutputTarget({
      componentCorePackage: 'tauix',
      loaderDir: 'stencil/loader',
      proxiesFile: '../tau-vue/forerunner/components.ts',
      includeDefineCustomElements: true,
      includePolyfills: true,
      customElementsDir: '',
      excludeComponents,
    }),
  ],
  plugins: [sass()],
};
