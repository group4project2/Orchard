module.exports = function (sequelize, DataTypes) {
  var Item = sequelize.define('Item', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    date_received: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    exp_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  });

  Item.associate = function (models) {
    Item.belongsTo(models.Category, {
      //   foreignKey: 'id',
      //   allowNull: false,
    });
  };

  return Item;
};
