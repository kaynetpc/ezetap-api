import {UserEntity} from '../../../mongo/entities/user/user.entities';
import {ISignUpResponse} from '../interfaces/signup.res.types';

export default class SignUpDTOResponse implements ISignUpResponse {
  fullname: string;
  email: string;
  photoUrl: string;
  address: string;
  phoneNumber: string;
  constructor(data: UserEntity) {
    this.fullname = data.lastName + ' ' + data.firstName;
    this.email = data.email;
    this.photoUrl = data.photoUrl ?? '';
    this.address = data.address ?? '';
    this.phoneNumber = data.phoneNumber ?? '';
  }
}
