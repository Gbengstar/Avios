// models of variant of product uploaded

export default (sequelize, DataTypes) => {
  const Variant = sequelize.define(
    "Variant",
    {
      size: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      colour: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      images: {
        type: DataTypes.STRING,
        allowNull: false,
        get() {
          return this.getDataValue("images").split(";");
        },
        set(val) {
          this.setDataValue("images", val.join(";"));
        },
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    },
    { tableName: "variants" }
  );
  // associate the variant table to product table using foreign key

  Variant.assocaite = (models) => {
    Variant.belongsTo(models.Product, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return Variant;
};
