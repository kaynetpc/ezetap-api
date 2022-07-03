#!/usr/bin/env bash

if [ "$NODE_ENV" = "production" ]; then
    npm install --only=production
else
    npm install --only=development
fi