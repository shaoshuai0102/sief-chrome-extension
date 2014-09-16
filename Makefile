install:
	npm install

build:
	node_modules/.bin/handlebars row.handlebars -f row-template.js
