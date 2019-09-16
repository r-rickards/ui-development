/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('goals', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		goalType: {
			type: DataTypes.ENUM('CODE_START_TIME','DAILY_HOURS','SESSION_HOURS'),
			allowNull: true,
			defaultValue: 'CODE_START_TIME'
		},
		goal: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		start: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: '1565150246'
		},
		end: {
			type: DataTypes.BIGINT,
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
		tableName: 'goals'
	});
};
