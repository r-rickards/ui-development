/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('liked_songs', {
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
		type: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		liked: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		liked_count: {
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
		}
	}, {
		tableName: 'liked_songs'
	});
};
