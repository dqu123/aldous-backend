.PHONY: compose-up
compose-up:
	docker-compose -f _docker/docker-compose-dev.yml up

.PHONY: compose-down
compose-down:
	docker-compose -f _docker/docker-compose-dev.yml down

.PHONY: db-docker-bash
db-docker-bash:
	docker exec -it aldous_backend_database_container bash

.PHONY: docker-psql
docker-psql:
	docker exec -it aldous_backend_database_container psql -U postgres aldous_backend_db

.PHONY: generate-migrations
generate-migrations:
	npx typeorm migration:generate -n $(MIGRATION_NAME)

.PHONY: run-migrations
run-migrations:
	npx typeorm migration:run

.PHONY: compile
compile:
	npm run build
