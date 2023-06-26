const {User} = require('../models')
module.exports = {
    async preference (req, res) {
        try {
            console.log('in')
            const { gender, yearsOfExp, typesOfTraining, gymLocation } = req.body
            console.log(gender)
            console.log(yearsOfExp)
            console.log(typesOfTraining)
            console.log(gymLocation)
            const users = await User.findAll({
                where: {
                    gender: gender,
                    yearsOfExp: yearsOfExp,
                    typesOfTraining: typesOfTraining,
                    gymLocation: gymLocation
                }
            })
            if (users) {
                console.log(users)
                return res.json(users)

            }

            if (!users) {
                console.log('no user')
                return res.status(403).send ({
                    error: "no user"
                })
            }

            res.status(200).send({status: 'received'})
        } catch (err) {
            console.log('not in ' + err)
            res.status(400).send({
                error: 'item not received'
            })
        }
    }
}