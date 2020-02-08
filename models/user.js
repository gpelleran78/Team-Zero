const bcrypt = require("bcrypt");

module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: DataTypes.CHAR(80),
        email: DataTypes.STRING,
        password: DataTypes.STRING
    });

    User.associate = function (models) {
        User.hasMany(models.Eventdb);
        User.hasMany(models.DrinkOrder);
    };

    User.generateHash = function (password) {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    };

    User.validPassword = function (inputPwd, dbPwd) {
        return bcrypt.compareSync(inputPwd, dbPwd);
    };

    User.sync();

    return User;
}