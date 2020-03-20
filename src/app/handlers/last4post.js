export default () => async (context: KoaContext, next: Function) =>
  context.throw(404, `Not found requested page '${context.url}'`);
