/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('calendars', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		external_id: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		name: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		synced: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: false
		},
		updatedAt: {
			type: DataTypes.DATE,
			allowNull: false
		},
		userId: {
			type: DataTypes.BIGINT,
			allowNull: true,
			references: {
				model: 'users',
				key: 'id'
			}
		}
	}, {
		tableName: 'calendars'
	});
};
