const {User} = require('../models')
const { Op } = require('sequelize')
module.exports = {
    async preference (req, res, next) {
        try {
            console.log('in')
            const { id, gender, yearsOfExp, typesOfTraining, gymLocation } = req.body
            console.log(id)
            console.log(gender)
            console.log(yearsOfExp)
            console.log(typesOfTraining)
            console.log(gymLocation)
            const users = await User.findAll({
                attributes: ['id', 'name', 'email', 'password', 'age', 'gender', 'gymFreq', 'yearsOfExp', 'typesOfTraining', 'gymLocation'],
                where: {
                    [Op.and]: [
                    { gender: gender },
                    { yearsOfExp: yearsOfExp },
                    { typesOfTraining: typesOfTraining },
                    { gymLocation: gymLocation },
                    { id: { [Op.ne]: id } }
                    ]
                }
            })

            if (!users) {
                console.log('no user')
                return res.status(403).send ({
                    error: "no user"
                })
            }
            console.log(users)

            res.setHeader('Content-Type', 'application/json')
            res.status(200).send(JSON.stringify(users))

        } catch (err) {
            console.log('not in ' + err)
            res.status(400).send({
                error: 'item not received'
            })
        }
    }
}