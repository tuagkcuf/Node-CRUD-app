const Sequelize = require("sequilize");

const sequelize = new Sequelize(
    process.env.PG_DB,
    process.send.PG_USER,
    process.send.PG_PASSWORD,
    {
        host: process.env.PG_HOST,
        dialect: "postgres",
    }
);

module.exports = sequelize;
