import Bottle from 'bottlejs';

import infrastructure from '../infrastructure';
import domains from '../domains';

import services from './services';
import handlers from './handlers';

import middlewares from './middlewares';
import koa from './koa-instance';
import routing from './routing';
import application from './app';

const bottle = new Bottle('StartApp');
bottle.strict = true;

infrastructure(bottle);
domains(bottle);

services(bottle);

bottle.constant('middlewares', middlewares);
bottle.constant('rootPath', '/input');

handlers(bottle);

bottle.serviceFactory(
  'koaApp',
  koa,
  'middlewares',
  'handler.error',
  'handler.errorCatching'
);

bottle.factory('routing', routing);

bottle.serviceFactory('application', application, 'koaApp', 'routing');

export default bottle.container;
