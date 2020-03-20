export default () => async (error: string | Error, context: KoaContext) => {
  if (typeof error === 'string') error = new Error(error);

  context.status = error.statusCode || error.status || 500;
  context.body = {
    message: error.message
  };
};
