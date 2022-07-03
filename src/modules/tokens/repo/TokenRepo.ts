import {IToken} from '../interface/token.req.types';
import {TokenModel} from '../../../mongo/models/token/token.model';

export default class TokenRepository {
  static async findByName(name: string) {
    return await TokenModel.findOne({name: name});
  }
  static async findByToken(token: string) {
    return await TokenModel.findOne({token: token});
  }
  static async findById(id: any) {
    return await TokenModel.findById(id);
  }

  static async find() {
    return await TokenModel.find();
  }

  static async create(data: IToken) {
    return await TokenModel.create(data);
  }

  static async createList(data: IToken[]) {
    return await TokenModel.create(data);
  }

  static async update(id: any, data: IToken) {
    return await TokenModel
        .findByIdAndUpdate(id, data, {useFindAndModify: false});
  }
}
