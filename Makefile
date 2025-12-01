## ---------------------------------------------------------
## Variables base
## ---------------------------------------------------------
DOCKER_COMPOSE = docker compose -f ./.docker/docker-compose.yml
APP_DIR = /var/www/html

## ---------------------------------------------------------
## Inicialización de la Aplicación
## ---------------------------------------------------------
.PHONY: init-app 
init-app: copy-env create-symlink up npm-install npm-host

.PHONY: copy-env
copy-env:
	@ [ ! -f .env ] && cp .env.example .env || true

.PHONY: create-symlink
create-symlink:
	@ [ -L .docker/.env ] || (ln -s ../.env .docker/.env && chown -h $(USER):$(USER) .docker/.env)

## ---------------------------------------------------------
## Gestión de Contenedores
## ---------------------------------------------------------
.PHONY: up
up: 
	$(DOCKER_COMPOSE) up -d

.PHONY: down
down:
	$(DOCKER_COMPOSE) down

.PHONY: restart
restart:
	$(DOCKER_COMPOSE) restart

.PHONY: ps
ps:
	$(DOCKER_COMPOSE) ps

.PHONY: build
build:
	$(DOCKER_COMPOSE) build --no-cache

.PHONY: stop
stop:
	$(DOCKER_COMPOSE) stop

.PHONY: shell
shell:
	$(DOCKER_COMPOSE) exec --user $(USER) server_docker bash


## ---------------------------------------------------------
## Limpieza de Recursos Docker
## ---------------------------------------------------------		

.PHONY: clean-docker
clean-docker:
	sudo docker rmi -f $$(sudo docker images -q) || true
	sudo docker volume rm $$(sudo docker volume ls -q) || true
	sudo docker network prune -f || true

## ---------------------------------------------------------
## Instalación y configuración del proyecto (React + npm)
## ---------------------------------------------------------
.PHONY: npm-create
npm-create:
	$(DOCKER_COMPOSE) exec --user node server_docker bash -c \
		"cd $(APP_DIR) && npm create vite@latest . -- --template react"

.PHONY: npm-install
npm-install:
	$(DOCKER_COMPOSE) exec --user node server_docker bash -c \
		"cd $(APP_DIR) && npm install"

.PHONY: npm-host
npm-host:
	$(DOCKER_COMPOSE) exec --user node server_docker bash -c \
		"cd $(APP_DIR) && npm run dev -- --host"

## ---------------------------------------------------------
## Compila el proyecto React/Vite para producción
## Genera la carpeta /dist con los archivos optimizados
## ---------------------------------------------------------
.PHONY: build-prod
build-prod:
	$(DOCKER_COMPOSE) exec --user pablogarciajc server_docker bash -c \
		"cd $(APP_DIR) && npm run build"
