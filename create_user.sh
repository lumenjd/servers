#!/bin/bash

# Check if the correct number of arguments are provided
if [ "$#" -ne 3 ]; then
  echo "Usage: $0 <server_version> <username> <password>"
  exit 1
fi

# Assign arguments to variables
server_version=$1
USERNAME=$2
PASSWORD=$3

# Generate the hash using the Python script
SALT_HASH=$(./hex.py "$USERNAME" "$PASSWORD")
echo $SALT_HASH

# Check if the hash generation was successful
if [ -z "$SALT_HASH" ]; then
  echo "Failed to generate password hash"
  exit 1
fi

# Change to the specified server_version
cd $server_version

# Source the .env file to get the MYSQL_ROOT_PASSWORD
if [ -f .env ]; then
  export $(cat .env | grep -v '#' | awk '/=/ {print $1}')
else
  echo ".env file not found in the specified server_version"
  exit 1
fi

# Define other information to be '0'
PROMPT='0'
ANSWER='0'
TRUENAME='0'
IDNUMBER='0'
EMAIL='0'
MOBILENUMBER='0'
PROVINCE='0'
CITY='0'
PHONENUMBER='0'
ADDRESS='0'
POSTALCODE='0'
GENDER='0'
BIRTHDAY='0'
QQ='0'

# Run the SQL command to call the stored procedure
docker exec -i db mysql -u root -p"$MYSQL_ROOT_PASSWORD" -e "
USE zx;
CALL adduser(
  '$USERNAME',
  UNHEX('$SALT_HASH'),
  '$PROMPT',
  '$ANSWER',
  '$TRUENAME',
  '$IDNUMBER',
  '$EMAIL',
  '$MOBILENUMBER',
  '$PROVINCE',
  '$CITY',
  '$PHONENUMBER',
  '$ADDRESS',
  '$POSTALCODE',
  '$GENDER',
  '$BIRTHDAY',
  '$QQ',
  UNHEX('$SALT_HASH')
);
"

