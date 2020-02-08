module.exports = function(sequelize, DataTypes) {
    const Order = sequelize.define("Order", {
        id: {
            type: DataTypes.INTEGER, 
            autoIncrement: true, 
            primaryKey: true
        }, 
        orderLog: {
            type: DataTypes.STRING,
            get: function() {
                return JSON.parse(this.getDataValue('orderLog'));
            }, 
            set: function(val) {
                return this.setDataValue('myArrayField', JSON.strifigy(val));  
            }
        }
    }); 

    Order.associate = function(models) {
        Order.belongsTo(models.User); 
    }; 

    return Order; 
}





