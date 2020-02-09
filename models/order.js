module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define("Order", {
        id: {
            type: DataTypes.INTEGER, 
            autoIncrement: true, 
            primaryKey: true
        }, 
        orderLog: {
            type: DataTypes.STRING,
           
        }
    }); 

    return Order; 
}