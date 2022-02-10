#!/bin/sh
# #!/usr/bin/env yarn

yarn build
yarn workspace tau-react build
yarn workspace tau-vue build

