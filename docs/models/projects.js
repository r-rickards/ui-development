/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('projects', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		directory: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		identifier: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		resource: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		projectRate: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '0'
		},
		workType: {
			type: DataTypes.STRING(255),
			allowNull: true,
			defaultValue: 'Work'
		},
		currency: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		tags: {
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
		tableName: 'projects'
	});
};
