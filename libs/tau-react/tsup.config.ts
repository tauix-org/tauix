// Dependencies
import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['index.ts', 'forerunner'],
  splitting: false,
  target: 'node14',
  dts: false,
  external: ['tauix/stencil/loader', '*.d.ts'],
  outDir: '../web-components/dist/react',
  skipNodeModulesBundle: true,
  sourcemap: false,
  tsconfig: 'tsconfig.json',
  clean: true,
});
