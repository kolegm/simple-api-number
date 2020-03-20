import Koa from 'koa';

export default (middlewares: [], handlerError, handlerErrorCatching) => () => {
  const app = new Koa();
  app.proxy = true;
  app.silent = true;

  app.on('error', handlerError);
  app.use(handlerErrorCatching);

  const handler = (middleware: Function) => app.use(middleware);
  middlewares.forEach(handler);

  return app;
};
