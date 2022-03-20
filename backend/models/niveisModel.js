module.exports = (sequelize, DataTypes) => {

    const Niveis = sequelize.define('niveis', {
        idniveis: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        nivel: {
            type: DataTypes.STRING,
        }
     
        }, {
        timestamps: false
    
    })

    return Niveis

}