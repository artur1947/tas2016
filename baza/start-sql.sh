#!/bin/bash -e

#################################
#########Section template########

#################################
############Colors###############

RED='\033[0;31m'
NC='\033[0m'
BLUE='\033[0;34m'
GREEN='\033[0;32m'
#################################
#########Local variables#########

should_start_server=0
should_run_sql=0
should_load_base=0

#################################
#########Local functions#########

function happy_inform
{
    echo -e $GREEN $@ '\n' $NC
}
function inform
{
    echo -e $BLUE $@ '\n' $NC
}
function error
{
    echo -e $RED 'ERROR: ' $@ '\n' 'Quitting script...\n' $NC
    exit 1
}
function warning
{
    echo -e $RED 'WARNING: ' $@ '\n' $NC
}

function start_server
{
    inform "Starting server..."
    sudo /etc/init.d/mysql start
    happy_inform "Started server!"
}
function run_sql
{
    inform "Running sql..."
    mysql -u root -h localhost -p #<create.sql
}
function load_database
{
    inform "Loading database..."
    mysql -u root -h localhost -p <create.sql
    happy_inform "Database loaded!"
}
#################################
#############Code################
while getopts 'lrs' flag; do
    case "${flag}" in
        l)
            should_load_base=1;
        ;;
        r)
            should_run_sql=1;
        ;;
        s)
            should_start_server=1;
        ;;
        *)
            error "Wrong flag supplied, quitting!"
        ;;
    esac
done

if [ $should_start_server -eq 1 ]; then
    start_server;
fi

if [ $should_load_base -eq 1 ]; then
    load_database;
fi

if [ $should_run_sql -eq 1 ]; then
    run_sql;
fi
