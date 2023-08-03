'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.User, { through: models.UserTag, foreignKey: "TagId" });
      this.belongsToMany(models.Post, { through: 'post_tag', foreignKey: 'TagId' });

    }
  }
  Tag.init({
    tag: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        is: / .{2,} $/i // The tag must have more than 2 characters
      },
      unique: true,
    }
  }, {
    sequelize,
    modelName: 'Tag',
    tableName: "tag",
    underscored: true
  });
  return Tag;
};