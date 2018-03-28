const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router
  .get('/', (ctx, next) => {
    ctx.body = 'Hello JSP ' + ctx.querystring;
  })
  .get('/todo', (ctx, next) => {
    ctx.body = 'Todo Page' + ctx.querystring;
  });

app
  .use(router.routes())
  .use(router.allowedMethods());
app.listen(3000, () => {
    console.log('linsten 3000...');
  });