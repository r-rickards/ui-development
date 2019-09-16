/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('plugins', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		image_url: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		categories: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: false
		},
		updatedAt: {
			type: DataTypes.DATE,
			allowNull: false
		}
	}, {
		tableName: 'plugins'
	});
};
