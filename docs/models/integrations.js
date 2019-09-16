/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('integrations', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		value: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		status: {
			type: DataTypes.ENUM('DELETED','ACTIVE'),
			allowNull: true,
			defaultValue: 'ACTIVE'
		},
		upgraded: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '0'
		},
		last_datum_timestamp: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		last_heartbeat_timestamp: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		version: {
			type: DataTypes.STRING(255),
			allowNull: true,
			defaultValue: ''
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
		pluginId: {
			type: DataTypes.BIGINT,
			allowNull: true,
			references: {
				model: 'plugins',
				key: 'id'
			}
		}
	}, {
		tableName: 'integrations'
	});
};
