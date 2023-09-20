const NodeEnvironment = require('jest-environment-node').TestEnvironment;
const path = require('path');
const fs = require('fs');

const globalConfigPath = path.join(__dirname, 'globalConfigMongo.json');

class MongoEnvironment extends NodeEnvironment {
  constructor(config) {
    super(config);
  }

  async setup() {
    const globalConfig = JSON.parse(fs.readFileSync(globalConfigPath, 'utf-8'));

    global.__MONGOD_URI__ = globalConfig.mongoUrl;
    global.__MONGOD_DB_NAME__ = globalConfig.mongoDBName;

    await super.setup();
  }

  async teardown() {
    await super.teardown();
  }

  runScript(script) {
    return super.runScript(script);
  }
}

module.exports = MongoEnvironment;
