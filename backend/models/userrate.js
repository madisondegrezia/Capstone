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

  UserRate.addHook("afterCreate", async(userRate, options)=>{
    const restaurantId = userRate.RestaurantId;
    const averageRate = await UserRate.findAll({
      attributes: [[sequelize.fn('AVG', sequelize.col('rate')), 'averageRate']],
      where: {
        RestaurantId: restaurantId
      }
    });

      // Update the rate column in the restaurant table
      const newRate = averageRate[0].dataValues.averageRate;
      await sequelize.models.Restaurant.update(
        { rate: newRate },
        { where: { id: restaurantId } }
      );
    });

    UserRate.addHook('afterDestroy', async (userRate, options) => {
      // Get the average rate for the restaurant
      const restaurantId = userRate.RestaurantId;
      const averageRate = await UserRate.findAll({
        attributes: [[sequelize.fn('AVG', sequelize.col('rate')), 'averageRate']],
        where: {
          RestaurantId: restaurantId
        }
      });
  
      // Update the rate column in the restaurant table
      const newRate = averageRate[0].dataValues.averageRate || 0; // If there are no reviews, set rate to 0
      await sequelize.models.Restaurant.update(
        { rate: newRate },
        { where: { id: restaurantId } }
      );
    });
    
  return UserRate;
};