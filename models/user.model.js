module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("users_table", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
          },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        is_active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
        role: {
            type: DataTypes.ENUM('user', 'admin'),
            defaultValue: 'user',
        },
    }, {
        freezeTableName: true,
        createdAt: "created_at",
        updatedAt: "updated_at"
    });
    return User;
}