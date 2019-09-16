/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('playlists', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		playlist_id: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		name: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		collaborative: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: '0'
		},
		public: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: '1'
		},
		description: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		deleted: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '0'
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
		playlistTypeId: {
			type: DataTypes.BIGINT,
			allowNull: true,
			references: {
				model: 'playlist_types',
				key: 'id'
			}
		}
	}, {
		tableName: 'playlists'
	});
};
