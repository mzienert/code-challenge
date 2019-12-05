const Koa = require('koa');
const Router = require('koa-router');
const logger = require('koa-logger');
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');
const mysql = require('koa2-mysql-wrapper');
const app = new Koa();

app.use(logger());
app.use(cors());
app.use(bodyParser());

app.use(mysql({
    host:'nmb.c9osive9tpqw.us-west-2.rds.amazonaws.com', 
    user: 'root',
    password: 'Freeski_2019', 
    database: 'nmb'
}));

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = err.message;
    ctx.app.emit('error', err, ctx);
  }
});

const router = new Router();

require('./routes/products')({ router });

app.use(router.routes());
app.use(router.allowedMethods());

const server = app.listen(3000);
module.exports = server;
