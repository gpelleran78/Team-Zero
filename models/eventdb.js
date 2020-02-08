module.exports = function(sequelize, DataTypes) {
    const Eventdb = sequelize.define("Eventdb", {
        id: {
            type: DataTypes.INTEGER, 
            autoIncrement:true, 
            primaryKey: true
        }, 
        name: DataTypes.STRING, 
        description: DataTypes.STRING, 
        date: DataTypes.DATE, 
        full: DataTypes.BOOLEAN, 
        image: DataTypes.STRING
    }); 

    Eventdb.associate = function(models) {

    }

    return Eventdb; 
}

