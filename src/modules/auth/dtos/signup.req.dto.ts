import {ISignUpRequest} from '../interfaces/signup.req.types';

export default class SignUpDTORequest {
  middlename: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  photoUrl: string;
  phoneNumber: string;
  occupation: string;
  userType: string;

  constructor(data: ISignUpRequest) {
    this.email = data.email;
    this.password = data.password;
    this.address = data.address;
    this.firstName = data.firstName;
    this.middlename = data.middlename;
    this.lastName = data.lastName;
    this.photoUrl = data.photoUrl ?? '';
    this.phoneNumber = data.phoneNumber;
    this.occupation = data.occupation;
    this.userType =data.userType;
  }
}
