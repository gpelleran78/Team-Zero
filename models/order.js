// module.exports = (sequelize, DataTypes) => {
//     const Order = sequelize.define("Order", {
//         id: {
//             type: DataTypes.INTEGER, 
//             autoIncrement: true, 
//             primaryKey: true
//         }, 
//         email: {
//             type: DataTypes.STRING,
//         },
//         orderLog: {
//             type: DataTypes.STRING
//         }
//     }); 

//     return Order; 
// }



module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define("Order", {
        id: {
            type: DataTypes.INTEGER, 
            autoIncrement: true, 
            primaryKey: true
        }, 
        email: {
            type: DataTypes.STRING
        },
        SFVanilla: {
            type: DataTypes.STRING
        }, 
        drinktype: {
            type: DataTypes.STRING
        }, 
        extraShots: {
            type: DataTypes.INTEGER
        }, 
        hazlenut: {
            type: DataTypes.STRING
        }, 
        milk: {
            type: DataTypes.STRING
        }, 
        mocha: {
            type: DataTypes.STRING
        }, 
        notes: {
            type: DataTypes.STRING
        }, 
        size: {
            type: DataTypes.STRING
        }, 
        temp: {
            type: DataTypes.STRING
        }, 
        vanilla: {
            type: DataTypes.STRING
        }, 
        whiteMocha: {
            type: DataTypes.STRING
        }
    }); 

    return Order; 
        
}

