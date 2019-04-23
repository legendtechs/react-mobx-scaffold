module.exports = {
  dev: {
    port: 9001
  },
  api: {
    dev: 'http://localhost:9003',
    test: 'http://localhost:9003',
    prod: 'http://localhost:9003'
  },
  mock: {
    path: '../mock',
    port: 9003
  },
  env: {
    development: {
      NODE_ENV: '"development"'
    },
    test: {
      NODE_ENV: '"production"'
    },
    production: {
      NODE_ENV: '"production"'
    }
  }
}