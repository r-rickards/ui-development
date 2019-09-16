/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('integrationstats', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		version: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		os: {
			type: DataTypes.STRING(255),
			allowNull: true,
			defaultValue: ''
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: false
		},
		updatedAt: {
			type: DataTypes.DATE,
			allowNull: false
		},
		pluginId: {
			type: DataTypes.BIGINT,
			allowNull: true,
			references: {
				model: 'plugins',
				key: 'id'
			}
		}
	}, {
		tableName: 'integrationstats'
	});
};
