#!/usr/bin/env bash
echo 'deploying for real now...'
git pull
npm run build-html
npm run build-js-dev
