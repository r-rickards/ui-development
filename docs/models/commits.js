/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('commits', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		commitId: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		message: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		changes: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		timestamp: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		file: {
			type: DataTypes.STRING(500),
			allowNull: true
		},
		deletions: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		insertions: {
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
		},
		userId: {
			type: DataTypes.BIGINT,
			allowNull: true,
			references: {
				model: 'users',
				key: 'id'
			}
		},
		repoId: {
			type: DataTypes.BIGINT,
			allowNull: true,
			references: {
				model: 'repos',
				key: 'id'
			}
		}
	}, {
		tableName: 'commits'
	});
};
