const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

function hashPassword (user, options) {
    const SALT_FACTOR = 8

    if (!user.changed('password')) {
        return
    }

    return bcrypt
        .genSaltAsync(SALT_FACTOR)
        .then(salt => bcrypt.hashAsync(user.password, salt, null))
        .then(hash => {
            user.setDataValue('password', hash)
        })
}

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        age: DataTypes.INTEGER,
        gender: DataTypes.STRING,
        gymFreq: DataTypes.STRING,
        yearsOfExp: DataTypes.STRING,
        typesOfTraining: DataTypes.STRING,
        gymLocation: DataTypes.STRING
    }, {
        tableName: 'users',
        timestamps: false,
        indexes: [{
            unique: true,
            fields: ['email']
        }],
        hooks: {
            beforeCreate: hashPassword,
            beforeUpdate: hashPassword
        }
    })

    User.prototype.comparePassword = function (password) {
        return bcrypt.compareAsync(password, this.password)
    }

    return User
}
