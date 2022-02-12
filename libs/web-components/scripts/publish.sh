#!/bin/sh
# #!/usr/bin/env yarn
yarn build

dir=./dist/package.json

cp -f ./package.json $dir


jq '.files=["core", "stencil", "hydrate", "vue", "react"]' $dir > tmp.$$.json && mv tmp.$$.json $dir
jq '.module="./stencil/index.js"'  $dir > tmp.$$.json && mv tmp.$$.json $dir
jq '.es2015="./stencil/esm/index.mjs"'  $dir > tmp.$$.json && mv tmp.$$.json $dir
jq '.es2017="./stencil/esm/index.mjs"'  $dir > tmp.$$.json && mv tmp.$$.json $dir
jq '.collection="./stencil/collection/collection-manifest.json"'  $dir > tmp.$$.json && mv tmp.$$.json $dir
jq '."collection:main"="./stencil/collection/index.js"' $dir > tmp.$$.json && mv tmp.$$.json $dir
jq '.types="./stencil/types/components.d.ts"' $dir > tmp.$$.json && mv tmp.$$.json $dir
jq '.main="./stencil/index.cjs.js"' $dir > tmp.$$.json && mv tmp.$$.json $dir
jq '.unpkg="./stencil/tauix/tauix.esm.js"' $dir > tmp.$$.json && mv tmp.$$.json $dir

yarn workspace tau-react build
yarn workspace tau-vue build
