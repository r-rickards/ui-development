/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('language_weights', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		language: {
			type: DataTypes.STRING(255),
			allowNull: false,
			unique: true
		},
		weight: {
			type: "DOUBLE",
			allowNull: false
		},
		language_avg_kpm: {
			type: "DOUBLE",
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
		tableName: 'language_weights'
	});
};
