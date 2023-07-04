#! /bin/bash

mv .env .env.temp
cp .env.remagi .env
yarn build
mv .env.temp .env