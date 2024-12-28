import { createCognitoUser } from "../lib/cognitoHelper";
import createUserService from "../createUser/createUserService";
import { Roles } from "@repo/app-types";
export const handler = signUp;

async function signUp(event) {
  try {
    const { firstName, lastName, email, password } = JSON.parse(event.body);

    const user = {
      email,
      firstName,
      isActive: true,
      role: Roles.USER,
      lastName,
      signUpIncomplete: true,
    };

    user.id = await createCognitoUser(email, password);
    const createdUser = await createUserService(user);
    console.log(createdUser, "createdUser");
    return createdUser;
  } catch (err) {
    return err;
  }
}
