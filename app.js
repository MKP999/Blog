const koa = require('koa')
const app = new koa()
const Router = require('koa-router')
const router = new Router()
// 全局配置
const config = require('./config/config')

// 引入路由
const user = require('./routes/user')

// 配置路由根路径
router.use('/api/users', user)

// 配置路由
app.use(router.routes()).use(router.allowedMethods());

const PORT = config.PORT || 5000
app.listen(PORT, () => console.log('Server on ' + PORT))