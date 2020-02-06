module.exports = function (sequelize, DataTypes) {

    const OrderLog = sequelize.define("OrderLog", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        name: DataTypes.TEXT,
        type: DataTypes.TEXT,
        description: DataTypes.TEXT,
        basePrice: DataTypes.INTEGER,
        userId: DataTypes.TEXT,
        purchaseDate: DataTypes.DATE
    });

    OrderLog.associate = function (models) {
        OrderLog.belongsTo(models.User);
        OrderLog.hasMany(models.Products);
    }
}

return OrderLog;

