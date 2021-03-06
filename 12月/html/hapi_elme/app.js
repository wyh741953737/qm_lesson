const Hapi = require('hapi');
const server = new Hapi.Server();
const routesHelloHapi = require('./routes/hello-hapi');
const pluginHapiSwagger = require('./plugins/hapi-swagger');
require('env2')('./.env');
const config = require('./config');
const routesShops=require('./routes/shops');
server.connection({
  port: config.port,
  host: config.host
});

const init = async () => {
  await server.register([
    ...pluginHapiSwagger
  ]);
  server.route([
    ...routesHelloHapi,
    ...routesShops
  ]);
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
}

init();


