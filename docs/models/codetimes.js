/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('codetimes', {
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
		local_start: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		end: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		local_end: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		timezone: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		offset_minutes: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		file: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		keystrokes: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		chars_added: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		chars_deleted: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		line_count: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		paste: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		length: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		lines_added: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		lines_removed: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		net_keys: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		file_open: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		file_close: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		syntax: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		project_name: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		project_directory: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		projectId: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		os: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		version: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		pluginId: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		userId: {
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
		}
	}, {
		tableName: 'codetimes'
	});
};
