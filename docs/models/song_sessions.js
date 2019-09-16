/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('song_sessions', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		trackId: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		playlistId: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		name: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		artist: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		genre: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		popularity: {
			type: DataTypes.INTEGER(11),
			allowNull: true
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
			allowNull: true,
			defaultValue: '0'
		},
		local_end: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		duration: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		state: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		type: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		spotifyTrackId: {
			type: DataTypes.STRING(255),
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
		pluginId: {
			type: DataTypes.INTEGER(11),
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
		source: {
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
		tableName: 'song_sessions'
	});
};
