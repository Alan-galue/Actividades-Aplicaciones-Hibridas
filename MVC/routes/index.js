const UserRouter = require('./UserRouter');
const routerAPI = (app) => {
    app.use('/api/Usuarios', UserRouter)
}