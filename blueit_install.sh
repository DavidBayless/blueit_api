#!/bin/bash

mkdir -p ~/workspace
cd ~/workspace
if [ -d ~/workspace/blueit_api ]; then
  git pull origin master
else
  git clone https://github.com/DavidBayless/blueit_api.git
fi
cd blueit_api
npm install
createdb blueit_api
knex migrate:latest
knex seed:run
export PORT=9001
nodemon
