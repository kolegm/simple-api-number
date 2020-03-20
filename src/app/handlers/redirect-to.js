export default (rooPath: string) => (context: KoaContext) =>
  context.redirect(rooPath);
