//models for the product uploaded by users

export default (sequelize, DataTypes) => {
  const Product = sequelize.define("Product", {
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: "compositeIndex",
    },
    product_description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    product_varieties: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date_uploaded: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    date_edited: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  });
  Product.associate = (models) => {
    Product.hasMAny(models.Variant, {
       onDelete: "CASACDE" 
      });
  };

  return Product;
};
