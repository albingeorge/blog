.PHONY: dev build preview install

install:
	npm install

dev:
	npm run blog:dev

build:
	npm run blog:build

preview:
	npm run blog:preview
