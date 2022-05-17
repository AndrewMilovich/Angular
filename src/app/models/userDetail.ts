import {UserInterface} from "./user.interface";

export interface IUserDetail extends UserInterface {
  email: string,
  address: IAddressUser
}

export interface IAddressUser {
  street: string,
  suite: string,
  city: string
}
