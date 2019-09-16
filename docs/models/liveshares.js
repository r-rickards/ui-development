/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('liveshares', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		access: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		shareId: {
			type: DataTypes.STRING(255),
			allowNull: false,
			unique: true
		},
		apiVesion: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		end: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		local_end: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		start: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		local_start: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		peerNumber: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		shareUser: {
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
		tableName: 'liveshares'
	});
};
