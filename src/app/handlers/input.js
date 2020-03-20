export default () => async (context: KoaContext, next: Function) =>
  (context.body = {
    message:
      'Please provide your number as URL parameter. Example: http://localhost/input/3 or http://localhost/input/74 or etc'
  });
