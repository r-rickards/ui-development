/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('groups', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING(255),
			allowNull: false,
			unique: true
		},
		url_name: {
			type: DataTypes.STRING(255),
			allowNull: false,
			unique: true
		},
		global: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0'
		},
		uuid: {
			type: DataTypes.STRING(255),
			allowNull: false,
			unique: true
		},
		profile_image: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		description: {
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
		}
	}, {
		tableName: 'groups'
	});
};
