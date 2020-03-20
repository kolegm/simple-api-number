export default (memory: Function) => async (
  context: KoaContext,
  next: Function
) => {
  const start = new Date();

  const TAGS = [
    `Method: ${context.method}`,
    `URL: ${context.url}`,
    `RequestId: ${context.state.id || 'none'}`
  ].join('. ');

  console.info(`___ Start. ${start.toString()}. ${memory()} ${TAGS}`);

  await next();

  const diff = new Date() - start;
  console.info(`___ Finish. Elapsed: ${diff}ms. ${memory()} ${TAGS}`);
};
