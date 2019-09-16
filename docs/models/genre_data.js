/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('genre_data', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		url: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		width: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		height: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		keywords: {
			type: DataTypes.STRING(255),
			allowNull: false
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
		tableName: 'genre_data'
	});
};
