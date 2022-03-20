module.exports = (sequelize, DataTypes) => {

    const Desenvolvedores = sequelize.define('desenvolvedores', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        devnivel: {
            type: DataTypes.STRING,
            //allowNull: false,

        },
        nome: {
            type: DataTypes.STRING,
            //allowNull: false
        },
        sexo: {
            type: DataTypes.CHAR,
            //allowNull: false
        },
        datadenascimento: {
            type: DataTypes.DATE,
            //allowNull: false
        },
        hobby: {
            type: DataTypes.STRING,
            //allowNull: false
        },
        idade: {
            type: DataTypes.INTEGER,
            //allowNull: false
        }
    
        },  {
        timestamps: false
    })

    return Desenvolvedores

}