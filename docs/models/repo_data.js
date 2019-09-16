/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('repo_data', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		userId: {
			type: DataTypes.BIGINT,
			allowNull: true,
			references: {
				model: 'users',
				key: 'id'
			}
		},
		nameWithOwner: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		timestamp: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		newCode: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		recodeOwn: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		recodeOthers: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		recodeByOthers: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		deleted: {
			type: DataTypes.INTEGER(11),
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
		tableName: 'repo_data'
	});
};
