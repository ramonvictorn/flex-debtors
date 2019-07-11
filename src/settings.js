module.exports.settings = {
    DB_HOST : process.env.DB_HOST ||'localhost',
    DB_USER  : process.env.DB_USER || 'postgres',
    DB_PASSWORD : process.env.DB_PASSWORD || 'password123',
    DB_DATABASE :process.env.DB_DATABASE ||'postgres',
    DB_PORT : process.env.DB_PORT || 15432,
    APP_PORT: process.env.PORT || 5050,
};