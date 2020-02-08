module.exports = function(sequelize, DataTypes) {
    const DrinkOrder = sequelize.define("DrinkOrder", {
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

    DrinkOrder.associate = function(models) {
        DrinkOrder.belongsTo(models.User); 
    }; 

    return DrinkOrder; 
}





