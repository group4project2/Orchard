// Inventory models

// The item has a name attribute of type DataTypes.String
// and a on sale attribute that is false by default

// QUESTIONS ON THIS:

// how are we going to add X many days onto the date_received to then store as exp_date?!?

module.exports = function (sequelize, DataTypes) {
  var Inventory = sequelize.define('Inventory', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Inventory.associate = function (models) {
    Inventory.hasMany(models.Item, {
      // foreignKey: 'id',
      // allowNull: false,
    });
    Inventory.hasMany(models.Employee, {
      // forgeinKey: 'id',
      // allowNull: false,
    });
  };

  return Inventory;
};
