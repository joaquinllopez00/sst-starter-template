import { UserModel } from "../../../models";

async function createUserService(user) {
  try {
    const newUser = UserModel.create({ ...user, createdAt: Math.floor(Date.now() / 1000) });
    return newUser;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export default createUserService;
