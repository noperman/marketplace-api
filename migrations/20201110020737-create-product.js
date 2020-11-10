'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      sellerId: {
        type: Sequelize.UUID,
        references: {
          model: {
            tableName: 'users',
          },
          key: 'id',
        },
        allowNull: false,
        onDelete: 'CASCADE',
      },
      categoryId: {
        type: Sequelize.UUID,
        references: {
          model: {
            tableName: 'productcategories',
          },
          key: 'id',
        },
        allowNull: false,
        onDelete: 'CASCADE',
      },
      markedBy: {
        allowNull: true,
        type: Sequelize.TEXT
      },
      name: {
        type: Sequelize.STRING
      },
      pictures: {
        type: Sequelize.TEXT
      },
      prices: {
        type: Sequelize.INTEGER
      },
      description: {
        allowNull: true,
        type: Sequelize.TEXT
      },
      active: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('products');
  }
};