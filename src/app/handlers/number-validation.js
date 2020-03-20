export default () => async (context: KoaContext, next: Function) => {
  context
    .checkParams('number', 'Invalid number')
    .notEmpty()
    .isInt();

  const errors = await context.validationErrors();

  if (errors && Array.isArray(errors)) {
    context.body = {
      message: `Validation errors`,
      errors: errors
    };
  } else {
    next();
  }
};
