export default (usecase: Function) => async (
  context: KoaContext,
  next: Function
) => {
  const requested = context.params.number || null;

  let message = '';
  let outcome = null;

  try {
    outcome = await usecase(requested);
    message = `Success! You have provided the number: ${context.params.number}`;
  } catch (error) {
    console.error(error);
    message =
      'Sorry, we are unable to process your request. Please repeat your request later ...';
  }

  context.body = { outcome, requested, message };
};
