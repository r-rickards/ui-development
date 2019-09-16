/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('repos', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		identifier: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		tag: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		branch: {
			type: DataTypes.STRING(255),
			allowNull: false
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
		tableName: 'repos'
	});
};
