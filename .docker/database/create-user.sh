#!/bin/bash
set -e

## ----------------------------------------------------------------------------
## Comandos SQL para crear la base de datos y usuario, y conceder privilegios
## ----------------------------------------------------------------------------

mysql -u $MYSQL_ROOT -p"$MYSQL_ROOT_PASSWORD" <<-EOSQL
    CREATE DATABASE IF NOT EXISTS $MYSQL_DATABASE;
    CREATE USER IF NOT EXISTS '$MYSQL_USER'@'%' IDENTIFIED BY '$MYSQL_PASSWORD';
    GRANT ALL PRIVILEGES ON *.* TO '$MYSQL_USER'@'%' WITH GRANT OPTION;
    FLUSH PRIVILEGES;
EOSQL
