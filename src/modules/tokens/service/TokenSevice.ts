import TokenRepository from '../repo/TokenRepo';
import ResponseError from '../../../services/response/ResponseError';
export default class TokenService {
  static async findByToken(token: string) {
    try {
      const res = await TokenRepository.findByToken(token);
      return res;
    } catch (error: any) {
      throw new ResponseError(error.message, 500);
    }
  }
}
