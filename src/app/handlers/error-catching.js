import type { KoaContext } from 'koa.extended';

export default () => async (context: KoaContext, next: Function) => {
  try {
    await next();
  } catch (error) {
    context.app.emit('error', error, context);
  }
};
