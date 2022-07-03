import {UserModel} from '../../../mongo/models/user/user.model';
import {UserEntity} from '../../../mongo/entities/user/user.entities';
export default class AuthRepository {
  static checkEmail(email: string) {
    return UserModel.findOne({email: email});
  }
  static finbByEmailAndPhoneNo(email: string, phoneNo: string) {
    return UserModel.findOne({email: email, phoneNo: phoneNo});
  }
  static findRefreshToken(refreshToken:string) {
    return UserModel.findOne({refreshToken: refreshToken});
  }
  static saveDetails(data:any) {
    return UserModel.create(data);
  }

  static async getList() {
    return await UserModel.find();
  }

  static async create(user: UserEntity) {
    return await UserModel.create(user);
  }

  static async update(data: {email: string, password: string}) {
    return await UserModel.findOneAndUpdate({email: data.email},
        {password: data.password}, {new: true});
  }

  static async getByEmail(email: string) {
    return await UserModel.findOne({email: email});
  }

  static async getByRefreshToken(token: string) {
    return await UserModel.findOne({refreshToken: token});
  }
  static async findUserId(userId: string) {
    return await UserModel.findById(userId);
  }
}
