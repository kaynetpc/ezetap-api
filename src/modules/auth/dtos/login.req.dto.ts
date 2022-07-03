import {ILoginRequest} from '../interfaces/login.req.types';

export default class LoginRequestDTO {
  email: string;
  password: string;
  constructor(data: ILoginRequest) {
    this.email = data.email;
    this.password = data.password;
  }
}
