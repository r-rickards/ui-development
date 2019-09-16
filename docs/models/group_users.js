/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('group_users', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		role: {
			type: DataTypes.STRING(255),
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
		},
		groupId: {
			type: DataTypes.BIGINT,
			allowNull: true,
			references: {
				model: 'groups',
				key: 'id'
			}
		}
	}, {
		tableName: 'group_users'
	});
};
