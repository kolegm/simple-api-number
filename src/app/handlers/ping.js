export default () => async (context: KoaContext, next: Function) =>
  (context.body = { message: 'ping > pong' });
