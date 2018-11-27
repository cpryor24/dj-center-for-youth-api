module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'djCenterForYouth',
      host: 'localhost'
    },
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds'
    }
  },
  production: {
    client: 'pg',
    conneection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds/productions'
    }
  }
}
