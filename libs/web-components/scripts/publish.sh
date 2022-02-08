#!/bin/sh
# #!/usr/bin/env yarn
yarn build

dir=./dist/package.json

cp -f ./package.json $dir
jq '.files=["core", "stencil", "hydrate", "vue", "react"]' $dir > tmp.$$.json && mv tmp.$$.json $dir

yarn workspace tau-react build
yarn workspace tau-vue build

