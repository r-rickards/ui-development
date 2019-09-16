/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('song_stats', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		trackId: {
			type: DataTypes.STRING(255),
			allowNull: true,
			unique: true
		},
		type: {
			type: DataTypes.STRING(50),
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
		duration_ms: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		danceability: {
			type: "DOUBLE",
			allowNull: false
		},
		energy: {
			type: "DOUBLE",
			allowNull: false
		},
		overall_key: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		loudness: {
			type: "DOUBLE",
			allowNull: false
		},
		mode: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		speechiness: {
			type: "DOUBLE",
			allowNull: false
		},
		acousticness: {
			type: "DOUBLE",
			allowNull: false
		},
		instrumentalness: {
			type: "DOUBLE",
			allowNull: false
		},
		liveness: {
			type: "DOUBLE",
			allowNull: false
		},
		valence: {
			type: "DOUBLE",
			allowNull: true
		},
		tempo: {
			type: "DOUBLE",
			allowNull: false
		},
		artists: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		album: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		popularity: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		explicit: {
			type: DataTypes.INTEGER(1),
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
		tableName: 'song_stats'
	});
};
