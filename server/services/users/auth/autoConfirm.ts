export async function handler(event, context) {
  event.response.autoConfirmUser = true;
  event.response.autoVerifyEmail = true;

  return event;
}
