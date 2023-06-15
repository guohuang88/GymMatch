module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'gymmatch',
        user: process.env.DB_USER || 'gymmatch',
        password: process.env.DB_PASS || 'gymmatch',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './gymmatch.sqlite'
        }

    }
}
