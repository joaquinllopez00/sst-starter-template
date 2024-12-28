import { RoleType } from "./RoleType";

export interface UserObj extends SignUpUserObj {
  avatar?: string;
  createdDate: string;
  id: string;
  isActive: boolean;
  role: RoleType;
}

export interface SignUpUserObj {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  source?: string | undefined;
}
