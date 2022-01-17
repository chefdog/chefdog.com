#!/bin/bash

echo "Building docker images"

docker build -t do-nginx:latest -f nginx/Dockerfile .
docker build -t cfg-cms:latest -f cfg-cms/Dockerfile .
docker build -t cfg-frontend:latest -f cfg-frontend/Dockerfile .

echo "Building successfull"

docker-compose -f docker-compose_dev.yml up