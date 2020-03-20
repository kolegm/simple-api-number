import Router from '@koa/router';

const TIME_POINT = '>>> App routing was created';

export default container => (application: KoaApplication) => {
  console.time(TIME_POINT);

  const router = new Router({ methods: ['GET'] });

  router.all('*', container.handler.metrics);
  router.get('/ping', container.handler.ping);
  router.get('/fail', container.handler.fail);

  router.get('/', container.handler.defaultPage);
  router.get('/input', container.handler.input);

  router.get(
    '/input/:number',
    container.handler.numberValidation,
    container.handler.number
  );

  application
    .use(router.routes())
    .use(router.allowedMethods())
    .use(container.handler.last4post);

  console.timeEnd(TIME_POINT);
};
