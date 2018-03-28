const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();

let home = new Router();
home
  .get('/jspang', (ctx) => {
    ctx.body = 'Home JSP';
  })
  .get('/todo', (ctx) => {
    ctx.body = 'Home Todo';
  });

let page = new Router();
page
  .get('/jspang', (ctx) => {
    ctx.body = 'Page JSP';
  })
  .get('/todo', (ctx) => {
    ctx.body = 'Page Todo';
  });

let router = new Router();
router.use('/home', home.routes(), home.allowedMethods())
router.use('/page', page.routes(), page.allowedMethods());

app
  .use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
    console.log('linsten 3000...');
  });