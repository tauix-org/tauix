#!/bin/sh

curl -X POST -H "Content-Type: application/json" -d '{"content": "Hey, uma nova versão de Tau UI foi lançada !"}' $URL
