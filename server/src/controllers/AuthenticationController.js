const {User} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')
const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

function jwtSignUser (user) {
    const ONE_WEEK = 60 * 60 * 24 * 7
    return jwt.sign(user, config.authentication.jwtSecret, {
        expiresIn: ONE_WEEK
    })
}

module.exports = {
    async register (req, res) {
        try {
            console.log('registered')
            const user = await User.create(req.body)
            const userJson = user.toJSON()
            res.send({
                user: userJson,
                token: jwtSignUser(userJson)
            })
        } catch (err) {
            console.log('not reg')
            res.status(400).send({
                error: 'This email account is already in use. '
            })
        }
    },
    async login (req, res) {
        try {
            console.log('im here')
            const {email, password} = req.body
            const user = await User.findOne({
                where: {
                    email: email
                }
            })

            if (!user) {
                console.log('wrong email or pass')
                return res.status(403).send ({
                    error: "Wrong email or password!"
                })
            }

            const isPasswordValid = await user.comparePassword(password)
            if (!isPasswordValid) {
                console.log('wrong pass')
                return res.status(403).send({
                    error: "Wrong password!"
                })
            }

            const userJson = user.toJSON()
            res.send({
                user: userJson,
                token: jwtSignUser(userJson)
            })


        } catch (error) {
            res.status(500).send({
                error: "An error has occured trying to log in " + error
            })
        }
    }
}
