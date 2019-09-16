/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('repo_members', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		email: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		name: {
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
		repoId: {
			type: DataTypes.BIGINT,
			allowNull: true,
			references: {
				model: 'repos',
				key: 'id'
			}
		}
	}, {
		tableName: 'repo_members'
	});
};
