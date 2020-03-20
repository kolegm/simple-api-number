export default (koaApp: KoaApplication, routing: Function) => () => {
  const app = koaApp();

  routing(app);

  return app;
};
