/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('feed_data', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		feed: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		userId: {
			type: DataTypes.BIGINT,
			allowNull: false,
			references: {
				model: 'users',
				key: 'id'
			}
		},
		timestamp: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		name: {
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
		tableName: 'feed_data'
	});
};
