module.exports = (sequelize, DataTypes) => {
    const Housing = sequelize.define("properties_table", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,           
        },
        location: { 
            type: DataTypes.JSON,
            allowNull: false 
        },
        price: { 
            type: DataTypes.FLOAT, 
            allowNull: false 
        },
        status: { 
            type: DataTypes.ENUM('available', 'sold', 'pending', 'deleted'), 
            defaultValue: 'available' 
        },
        features: { 
            type: DataTypes.JSON 
        },
    }, {
        freezeTableName: true,
        createdAt: "created_at",
        updatedAt: "updated_at"
    });
    return Housing;
}