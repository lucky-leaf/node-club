const Koa=require('koa');
const logger=require('koa-logger');
const bodyparser=require('koa-bodyparser');
const staticCache=require('koa-static-cache');
const errorhandler=require('koa-errorhandler');
const session=require('koa-generic-session');
const MongoStore=require('koa-generic-session-mongo');
const flash=require('koa-flash');
const compress=require('koa-compress');
const scheme=require('koa-scheme');
const router=require('koa-frouter');
const routerCache=require('koa-router-cache');
const render=require('koa-ejs');
const config=require('config-lite');
const merge=require('merge-descriptors');
