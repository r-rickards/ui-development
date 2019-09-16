/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('deactive_users', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		email: {
			type: DataTypes.STRING(255),
			allowNull: true,
			unique: true
		},
		password: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		profile_image: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		salt: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		setup_complete: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		},
		code_goals: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		client_cache: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		timezone: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		occupation: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		company: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		location: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		github_id: {
			type: DataTypes.STRING(255),
			allowNull: true,
			unique: true
		},
		github_access_token: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		github_refresh_token: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		github_scopes: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		google_id: {
			type: DataTypes.STRING(255),
			allowNull: true,
			unique: true
		},
		google_access_token: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		google_refresh_token: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		permissions: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		invite_timestamp: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		login_timestamp: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: '0'
		},
		login_count: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '0'
		},
		invite_token: {
			type: DataTypes.STRING(255),
			allowNull: true,
			unique: true
		},
		plugin_token: {
			type: DataTypes.STRING(255),
			allowNull: true,
			unique: true
		},
		reset_token: {
			type: DataTypes.STRING(255),
			allowNull: true,
			unique: true
		},
		confirm_token: {
			type: DataTypes.STRING(255),
			allowNull: true,
			unique: true
		},
		plugin_jwt: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		first_datum_timestamp: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: '0'
		},
		last_datum_timestamp: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: '0'
		},
		time_to_collect_data: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		oauths: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		preferences: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		datum_count: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: '0'
		},
		groups: {
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
		}
	}, {
		tableName: 'deactive_users'
	});
};
