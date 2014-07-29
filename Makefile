
#MOCHA_OPTS= --check-leaks --timeout 60000
MOCHA_OPTS= --timeout 60000
REPORTER = spec
# Default the export directory to a sibling named midas.
DIR = ../midas

export:
	-cp config/local.js $(DIR)/config/
	-cp config/settings/*.js $(DIR)/config/settings/
	-cp assets/js/backbone/config/*.js $(DIR)/assets/js/backbone/config/
	-cp assets/js/backbone/config/*.json $(DIR)/assets/js/backbone/config/
	-cp assets/styles/*.css $(DIR)/assets/styles/
	 cp -R assets/images/* $(DIR)/assets/images/
	-cp -R assets/js/backbone/apps/* $(DIR)/assets/js/backbone/apps/
	-cp test/init/init/config.js $(DIR)/test/init/init/config.js
	-cp test/demo/data/config.js $(DIR)/test/demo/data/config.js
	-cp -R test/demo/data/assets/* $(DIR)/test/demo/data/assets

