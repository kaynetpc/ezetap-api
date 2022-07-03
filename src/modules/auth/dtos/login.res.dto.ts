import {UserEntity} from '../../../mongo/entities/user/user.entities';
import {ILoginResponse} from '../interfaces/login.res.types';
export default class LoginResponseDTO implements ILoginResponse {
  fullname: string;
  photoUrl: string;
  email: string;
  accessToken: string;
  refreshToken : string;

  constructor(data: UserEntity) {
    this.fullname = data.lastName + ' ' + data.firstName;
    this.email = data.email;
    this.photoUrl = data.photoUrl ?? '';
    this.accessToken = data.token ?? '';
    this.refreshToken = data.refreshToken ?? '';
  }
}
