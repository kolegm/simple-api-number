export default () => async (context: KoaContext, next: Function) =>
  context.throw(500, 'Test failed execution');
