'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserRate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, {foreignKey: "UserId"});
      this.belongsTo(models.Restaurant, {foreignKey: "RestaurantId"});
    }
  }
  UserRate.init({
    RestaurantId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Restaurant",
        key: "id",
      },
      field: "RestaurantId"
    },
    UserId: {
      type:DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "User",
        key: "id",
      },
      field: "UserId"      
    },
    rate: {
      type:DataTypes.FLOAT,
      allowNull: false,
    },
    review: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'UserRate',
    tableName: "user_rate",
    underscored: true
  });
  return UserRate;
};