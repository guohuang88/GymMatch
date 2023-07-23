const {Match} = require('../models')

module.exports = {
    async schedule (req, res) {
        try {
            const match = await Match.create(req.body)

            const { userId, matchedUserId, meetingDate, meetingTime, gymLocation, meetingStatus } = req.body
            console.log(userId)
            console.log(matchedUserId)
            console.log(meetingDate)
            console.log(meetingTime)
            console.log(gymLocation)
            console.log(meetingStatus)

            const matches = await Match.findAll({
                attributes: ['id', 'userId', 'matchedUserId', 'meetingDate', 'meetingTime', 'gymLocation', 'meetingStatus']
            })
            if (!matches) {
                console.log('no matches')
                return res.status(403).send ({
                    error: "no matches"
                })
            }
            console.log(matches)

            res.setHeader('Content-Type', 'application/json')
            res.status(200).send(JSON.stringify(matches))

        } catch (err) {
            console.log(err)
            res.status(400).send({
                error: 'cannot find match'
            })
        }
    },
    async getSchedule (req, res) {
        try {
            const matches = await Match.findAll({
                attributes: ['id', 'userId', 'matchedUserId', 'meetingDate', 'meetingTime', 'gymLocation', 'meetingStatus']
            })
            if (!matches) {
                console.log('no matches')
                return res.status(403).send ({
                    error: "no matches"
                })
            }
            console.log(matches)

            res.setHeader('Content-Type', 'application/json')
            res.status(200).send(JSON.stringify(matches))

        } catch (err) {
            console.log(err)
            res.status(400).send({
                error: 'cannot find match'
            })
        }
    },
    async updateMeetingStatus (req, res) {
        try {
            const { userId, matchedUserId, meetingStatus } = req.body;
            console.log(userId)
            console.log(matchedUserId)
            console.log(meetingStatus)
            const updatedMatch = await Match.update(
                { meetingStatus }, // The fields to be updated
                { where: {
                    userId: userId,
                    matchedUserId: matchedUserId
                } } // The condition to identify the specific match to update
            )
            console.log(updatedMatch)
            if (updatedMatch[0] !== 1) {
                return res.status(404).send({ error: 'Match not found' });
            }

            const matches = await Match.findAll({
                attributes: ['id', 'userId', 'matchedUserId', 'meetingDate', 'meetingTime', 'gymLocation', 'meetingStatus']
            })

            if (!matches) {
                console.log('no matches')
                return res.status(403).send ({
                    error: "no matches"
                })
            }
            console.log(matches)

            res.setHeader('Content-Type', 'application/json')
            res.status(200).send(JSON.stringify(matches))

        } catch (err) {
            console.log(err)
            res.status(400).send({
                error: 'cannot find match'
            })
        }
    }
}
