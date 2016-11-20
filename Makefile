REST_DIR ?= Rest-Sealious

.PHONY: all run-server deps

all: run-server

run-server: deps
	cd $(REST_DIR); node . 2>&1 | tee log.txt

deps: $(REST_DIR)/package.json
	cd $(REST_DIR); sudo npm link

clean:
	rm -rf log.txt
	cd $(REST_DIR)
	rm -rf node_modules
	rm -rf uploaded_files
