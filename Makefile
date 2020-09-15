# Include environment variables from .env
include .env


database-docker-up:
	docker run -d --rm -e MONGO_INITDB_ROOT_USERNAME=productListUser -e MONGO_INITDB_ROOT_PASSWORD=productListPassword -p 27017:27017 --name mongodb-local -v "$(shell pwd)/database":/database mongo:3.6.8

database-provision:
	docker exec mongodb-local bash -c './database/import.sh localhost'

database-up:
	make database-docker-up
	make database-provision

database-reset:
	make database-down
	make database-up

database-down:
	docker rm -f mongodb-local


build:
	docker-compose build
	
run:
	docker-compose up

init:
	docker-compose up -d
	docker exec mongodb-local bash -c './database/import.sh localhost'


start:
	docker-compose up -d

stop:
	docker-compose stop

restart:
	docker-compose restart
