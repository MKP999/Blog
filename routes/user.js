const Router = require('koa-router')
const router = new Router()

router.get('/', async ctx => {
    ctx.body = { msg: 'next'}
})

module.exports = router.routes()