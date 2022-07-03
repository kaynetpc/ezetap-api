import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import ResponseError from '../../../services/response/ResponseError';
import {IToken} from '../../tokens/interface/token.req.types';
import TokenRepository from '../../tokens/repo/TokenRepo';
import {AuthConfigs} from '../configs';
import LoginResponseDTO from '../dtos/login.res.dto';
import {ILoginRequest} from '../interfaces/login.req.types';
import AuthRepository from '../repo/AuthRepo';
import {IResponseFormat} from '../../../services/response/ResponseService';
import {ITokenData} from '../interfaces/token.data.types';
import {UserEntity} from '../../../mongo/entities/user/user.entities';

export default class AuthService {
  static generateAuthToken(tokenData : any) {
    return jwt.sign(
        tokenData, AuthConfigs.ACCESS_TOKEN_SECRET, {
          expiresIn: AuthConfigs.TOKEN_SECRET_LIFE,
        });
  }

  static generateAuthRefreshToken(tokenData : any) {
    return jwt.sign(
        tokenData, AuthConfigs.REFRESH_TOKEN_SECRET, {
          expiresIn: AuthConfigs.REFRESH_TOKEN_SECRET_LIFE,
        });
  }

  static async login(req: ILoginRequest) {
    try {
      const data = await AuthRepository.checkEmail(req.email);
      if (data) {
        const comparePassword = await bcrypt.compare(req.password, data.password);
        if (!comparePassword ) {
          throw new ResponseError('password is incor rect', 404);
        }

        return {
          error: false,
          data: new LoginResponseDTO(data),
          message: 'Login Successful',
        };
      }
    } catch (error: any) {
      throw ResponseError.get(error);
    }
  }

  static async register(payload: UserEntity): Promise<IResponseFormat> {
    try {
      // Check if user exist
      const user = await AuthRepository.getByEmail(payload.email);
      if (user) {
        throw new ResponseError('User already exist', 409);
      }
      // Hash password
      const newPassword = await bcrypt.hash(payload.password, Math.random());

      // LogService.info('New user atempt ', newPassword);
      payload.password = newPassword;
      await AuthRepository.create(payload);
      return {message: 'User created', statusCode: 201};
    } catch (error: any) {
      throw ResponseError.get(error);
    }
  }

  static async getUsers(): Promise<IResponseFormat> {
    try {
      const data = await AuthRepository.getList();
      return {
        message: 'User list',
        data: data,
        statusCode: 200,
      };
    } catch (error) {
      throw ResponseError.get(error);
    }
  }

  static generateToken = (
      user: (UserEntity & {
    _id: any;
})) => {
    const tokenData: ITokenData = {
      email: user.email,
      lastName: user.lastName,
      userId: user._id,
    };
    user.token = jwt.sign(tokenData, AuthConfigs.TOKEN_KEY, {
      expiresIn: AuthConfigs.TOKEN_EXPIRATION_TIME,
    });
    user.token = jwt.sign(tokenData, AuthConfigs.REFRESH_TOKEN_SECRET, {
      expiresIn: AuthConfigs.REFRESH_TOKEN_SECRET_LIFE,
    });
    return user;
  };

  static generatePasswordResetToken = (user: UserEntity) => {
    const payload = {email: user.email, lastName: user.lastName};
    user.token = jwt.sign(payload, AuthConfigs.PASSWORD_RESET_TOKEN_KEY, {
      expiresIn: AuthConfigs.PASSWORD_RESET_TOKEN_EXPIRATION_TIME,
    });
    return user;
  };


  // add token to db

  static async registerToken(data: IToken[]) {
    try {
      // Get all tokens in the system
      const tokens = await TokenRepository.find();
      // Prepared data bucket
      const process: IToken[] = [];
      for (let i = 0; i < data.length; i++) {
        const cur = data[i];
        // check if current token exist
        if (!this.isTokenExist(tokens, cur.token)) {
          process.push(cur);
        }
      }
      // else create new
      try {
        await TokenRepository.createList(process);
        return true;
      } catch (error) {
        // return false if failed
        return false;
      }
    } catch (error: any) {
      ResponseError.get(error);
      return false;
    }
  }
  static isTokenExist = (tokens: IToken[], token: string): boolean => {
    let res = false;
    for (let i = 0; i < tokens.length, i++;) {
      if (tokens[i].token === token) return res = true;
    }
    return res;
  };
}
