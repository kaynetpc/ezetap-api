import {msg} from '../../../dictionary/string';
import {LogService} from '../../../services/log/LogService';
import ResponseError from '../../../services/response/ResponseError';
import {IMovieData, IResponseFormat} from '../interface/movie.req.types';
import MovieRepository from '../repo/MovieRepo';


export default class MovieService {
  static async create(data: IMovieData): Promise<IResponseFormat> {
    try {
      // Check if already exist
      const res = await MovieRepository.findByName(data.name);
      if (res) {
        // Already exist
        throw new ResponseError(msg.ALREADY_EXIST, 409);
      }
      // create data
      await MovieRepository.create(data);
      return {error: false, data: data, message: msg.SAVE_SUCCESS};
    } catch (error: any) {
      LogService.error(error);
      throw new ResponseError(error.message, ResponseError.CONFLICT);
    }
  }

  static async update(id: any, data: IMovieData): Promise<IResponseFormat> {
    try {
      // Check if already exist
      const res = await MovieRepository.findById(id);
      if (!res) {
        throw new ResponseError(msg.RECORD_NOT_FOUND, ResponseError.NOT_FOUND);
      }
      await MovieRepository.update(id, data);
      return {
        error: false, data: data, message: msg.UPDATED,
      };
    } catch (error: any) {
      LogService.error(error);
      throw new ResponseError(error.message, 500);
    }
  }

  static async movieList(paginate: {page: number, size: number}): Promise<IResponseFormat> {
    try {
      const total: number = await MovieRepository.countAll();
      const data = await MovieRepository.findByPageAndSize(paginate);
      const dataFormat = {
        list: data,
        total: total,
      };
      if (!data) {
        throw new ResponseError(msg.ALREADY_EXIST, ResponseError.INTERNAL_SERVER_ERROR);
      }
      return {error: false, data: dataFormat, message: 'success!'};
    } catch (error: any) {
      LogService.error(error);
      throw new ResponseError(error.message, 500);
    }
  }

  static async movieListByDate(param: {to: Date, from: Date}): Promise<IResponseFormat> {
    try {
      const total = await MovieRepository.countByDate(param);
      const data = await MovieRepository.findByDate(param);
      const dataFormat = {
        list: data,
        total: total,
      };
      if (!data) {
        throw new ResponseError(msg.INTERNAL_SERVER_ERROR, ResponseError.INTERNAL_SERVER_ERROR);
      }
      return {error: false, data: dataFormat, message: 'success!'};
    } catch (error: any) {
      LogService.error(error);
      throw new ResponseError(error.message, 500);
    }
  }

  static async getSingleById(id: any): Promise<IResponseFormat> {
    try {
      const data = await MovieRepository.findById(id);
      if (!data) {
        throw new ResponseError(msg.INTERNAL_SERVER_ERROR, ResponseError.INTERNAL_SERVER_ERROR);
      }
      return {error: false, data: data, message: 'success!'};
    } catch (error: any) {
      LogService.error(error);
      throw new ResponseError(error.message, 500);
    }
  }

  static async delete(id: any): Promise<IResponseFormat> {
    try {
      // Check if already exist
      const res = await MovieRepository.findById(id);
      if (!res) {
        throw new ResponseError(msg.RECORD_NOT_FOUND, ResponseError.NOT_FOUND);
      }
      await MovieRepository.delete(id);
      return {error: false, data: 200, message: msg.ITEM_DELETED};
    } catch (error: any) {
      LogService.error(error);
      throw new ResponseError(error.message, 500);
    }
  }
}
