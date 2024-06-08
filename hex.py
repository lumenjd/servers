#!/usr/bin/python3

import sys
import hashlib

def generate_hash(login, passwd):
    salt = login.strip().lower() + passwd.strip()
    salt_hash = hashlib.md5(salt.encode()).hexdigest()
    return salt_hash

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: hash_password.py <login> <passwd>")
        sys.exit(1)

    login = sys.argv[1]
    passwd = sys.argv[2]
    salt_hash = generate_hash(login, passwd)
    print(salt_hash)
