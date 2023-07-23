const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const PreferenceController = require('./controllers/PreferenceController')
const ScheduleController = require('./controllers/ScheduleController')

module.exports = (app) => {
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    })

    app.get('/api', (req, res) => {
        res.json({ message: 'Hello from the Express backend!' })
    })

    app.post('/api/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)

    app.post('/api/login', AuthenticationController.login)

    app.post('/api/preference', PreferenceController.preference)

    app.post('/api/schedule', ScheduleController.schedule)

    app.get('/api/home', ScheduleController.getSchedule)

    app.put('/api/meetingConfirmation', ScheduleController.updateMeetingStatus)
}
