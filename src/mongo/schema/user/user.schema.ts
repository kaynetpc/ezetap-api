import {Schema} from 'mongoose';
import {UserEntity} from '../../entities/user/user.entities';

export const UserSchema = new Schema<UserEntity>({
  // user: {required: true, type: String},
  email: {required: true, type: String},
  firstName: {required: false, type: String},
  lastName: {required: true, type: String},
  password: {required: true, type: String},
  address: {required: false, type: String},
  token: {required: false, type: String},
  refreshToken: {required: false, type: String},
  phoneNumber: {required: false, type: String},

});
