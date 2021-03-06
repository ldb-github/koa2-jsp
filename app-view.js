const Koa = require('koa');
const views = require('koa-views');
const path = require('path');
const app = new Koa();

app.use(views(path.join(__dirname, './views'), {
    extension: 'ejs'
}));

app.use(async ctx => {
    let title = 'index';
    await ctx.render('index', {
        title
    });
});

app.listen(3000, () => {
    console.log('listening 3000...');
});