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

    app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)

    app.post('/login', AuthenticationController.login)

    app.post('/preference', PreferenceController.preference)

    app.post('/schedule', ScheduleController.schedule)

    app.get('/home', ScheduleController.getSchedule)

    app.put('/meetingConfirmation', ScheduleController.updateMeetingStatus)
}
