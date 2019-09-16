/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('codetime_metrics', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		end: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		local_end: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		userId: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		timezone: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		file_duration_seconds: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		keystrokes: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		avg_kpm: {
			type: "DOUBLE",
			allowNull: true
		},
		chars_added: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		chars_deleted: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		paste: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		lines_added: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		lines_removed: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		top_language: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		plugin_ids: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		metric_type: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		projectId: {
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
		tableName: 'codetime_metrics'
	});
};
