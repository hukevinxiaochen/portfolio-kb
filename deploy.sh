#!/usr/bin/env bash
echo 'deploying for real now...'
git pull
npm install
npm run build
