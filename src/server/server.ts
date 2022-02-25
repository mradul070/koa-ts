import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import convert from 'koa-convert'
import logger from 'koa-logger'
import passport from 'koa-passport'
import mount from 'koa-mount'
import serve from 'koa-static'
import helmet from 'koa-helmet'
import { Middleware } from 'koa-compose'
import http2 from 'http2'
import fs from 'fs'
import errorMiddleware from '../app/core/middleware/ErrorMiddleware'
import config from '../resources/config'
import routes from '../app/routes'

const app: Koa = new Koa()
const _use: Function = app.use
app.use = (x: Middleware<any>) => _use.call(app, convert(x))

app.use(helmet())
app.use(logger())
app.use(bodyParser())
app.use(errorMiddleware.errorMiddleware())
app.use(passport.initialize())
app.use(passport.session())

routes(app)

// show swagger only if the NODE_ENV is development and stagging
if (['development', 'staging'].includes(config.environment)) {
    app.use(mount('/swagger', serve(`${process.cwd()}/src/resources/swagger`)))
}

app.listen(config.port, () => {
    console.log(`Server started at ${config.port}`);
});
