#!/bin/bash

# Check if the correct number of arguments are provided
if [ "$#" -ne 1 ]; then
  echo "Usage: $0 <server_version>"
  exit 1
fi

# Assign arguments to variables
SERVER_VERSION=$1

cd "$SERVER_VERSION" || { echo "Directory $SERVER_VERSION not found"; exit 1; }

ARCH=$(uname -m)

sudo docker-compose down

if [ "$ARCH" = "i386" ]; then
  docker-compose --profile i386 up -d --build
else
  docker-compose --profile x86_64 up -d --build
fi

sudo docker-compose logs -f --tail 10
