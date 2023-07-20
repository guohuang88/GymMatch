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
            const user = await User.create(req.body)
            const userJson = user.toJSON()
            res.setHeader('Content-Type', 'application/json')
            res.status(200).send({
                user: userJson,
                token: jwtSignUser(userJson)
            })
            console.log(userJson)
            console.log('registered')
        } catch (err) {
            console.log('not reg')
            console.log(err)
            res.status(400).send({
                error: 'This email account is already in use. '
            })
        }
    },
    async login (req, res) {
        try {
            const {email, password} = req.body
            // console.log(email)
            // console.log(password)
            const user = await User.findOne({
                where: {
                    email: email
                }
            }
            // TODO: test ltr
            // res.status(200).send({status: 'received'})
            )

            if (!user) {
                console.log('wrong email or pass')
                res.setHeader('Content-Type', 'application/json')
                return res.status(403).send ({
                    error: "Wrong email or password!"
                })
            }

            const isPasswordValid = await user.comparePassword(password)
            if (!isPasswordValid) {
                console.log('wrong pass')
                res.setHeader('Content-Type', 'application/json')
                return res.status(403).send({
                    error: "Wrong password!"
                })
            }

            console.log('login successful')
            const userJson = user.toJSON()
            res.setHeader('Content-Type', 'application/json')
            res.status(200).send({
                user: userJson,
                token: jwtSignUser(userJson)
            })
            console.log('log in')

        } catch (error) {
            res.setHeader('Content-Type', 'application/json')
            res.status(500).send({
                error: "An error has occured trying to log in " + error
            })
        }
    }
}
