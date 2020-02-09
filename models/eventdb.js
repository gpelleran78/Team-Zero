module.exports = (sequelize, DataTypes) => {
    const Eventdb = sequelize.define("Eventdb", {
        id: {
            type: DataTypes.INTEGER, 
            autoIncrement:true, 
            primaryKey: true
        }, 
        name: DataTypes.STRING, 
        description: DataTypes.STRING, 
        date: DataTypes.DATE,
        image: DataTypes.STRING
    }); 

    return Eventdb; 
}