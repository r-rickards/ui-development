/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('heartbeats', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		start: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		os: {
			type: DataTypes.STRING(255),
			allowNull: true,
			defaultValue: ''
		},
		version: {
			type: DataTypes.STRING(255),
			allowNull: true,
			defaultValue: ''
		},
		session_ctime: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		hostname: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		timezone: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		trigger_annotation: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		editor_token: {
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
		pluginId: {
			type: DataTypes.BIGINT,
			allowNull: true,
			references: {
				model: 'plugins',
				key: 'id'
			}
		}
	}, {
		tableName: 'heartbeats'
	});
};
