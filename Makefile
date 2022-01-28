.PHONY: dev-compose-up
dev-compose-up:
	docker-compose -f _docker/docker-compose-dev.yml up --detach

.PHONY: dev-compose-down
dev-compose-down:
	docker-compose -f _docker/docker-compose-dev.yml down

.PHONY: dev-db-bash
dev-db-bash:
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

# Test commands
.PHONY: start-test-db
start-test-db:
	docker-compose -f _docker/docker-compose-test.yml up --detach

.PHONY: quit-test-db
quit-test-db:
	docker-compose -f _docker/docker-compose-test.yml down

.PHONY: test-db-bash
test-db-bash:
	docker exec -it aldous_backend_test_database_container bash
