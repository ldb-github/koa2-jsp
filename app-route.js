const Koa = require('koa');
const fs = require('fs');
const app = new Koa();

function render(page) {
  return new Promise((resolve, reject) => {
    let pageUrl = `./page/${page}`;
    fs.readFile(pageUrl, 'binary', (err, data) => {
      if (err) {
        console.log('err: ' + err);
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

async function route(url) {
  let page = '404.html';
  switch (url) {
    case '/':
      page = 'index.html';
      break;
    case '/index':
      page ='index.html';
      break;
    case '/todo':
        page = 'todo.html';
        break;
    case '/404':
        page = '404.html';
        break;
    default:
        break; 
  }
  let html =  render(page);
  html.then(data => {
    console.log('data: ' + data);
  }).catch(error => {
    console.log('error: ' + error);
  });

  return html;
}

app.use(async (ctx) => {
  let url = ctx.request.url;
  let html = await route(url);

  console.log('html: ' + html);

  ctx.body = html;
});

app.listen(3000);
console.log('starting at 3000');