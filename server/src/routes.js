const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const PreferenceController = require('./controllers/PreferenceController')

module.exports = (app) => {

    app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)

    app.post('/login', AuthenticationController.login)
    // add controller
    console.log('add controller')
    app.post('/preference', PreferenceController.preference)
}
