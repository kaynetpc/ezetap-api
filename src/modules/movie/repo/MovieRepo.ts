import {IMovieData} from '../interface/movie.req.types';
import {MovieModel} from '../../../mongo/models/movie/movie.model';

export default class MovieRepository {
  static async findByName(name: string) {
    return await MovieModel.findOne({name: name});
  }
  static async findById(id: any) {
    return await MovieModel.findById(id);
  }

  static async findByPageAndSize(paginate: {page: number, size: number}) {
    const skip = paginate.size * paginate.page;
    return await MovieModel.find({}, {}, {
      limit: paginate.size, skip: skip,
    });
  }

  static async findByDate(param: {from: Date, to: Date}) {
    const from = new Date(param.from);
    const to = new Date(param.to);
    return await MovieModel.aggregate([
      {$match: {createdAt: {
        $gte: from, $lte: to,
      }},
      },
    ]);
  }
  static async countByDate(param: {from: Date, to: Date}) {
    const from = new Date(param.from);
    const to = new Date(param.to);
    const data = await MovieModel.aggregate([
      {$match: {createdAt: {
        $gte: from, $lte: to,
      }},
      },
    ]);
    return data.length;
  }

  static async create(data: IMovieData) {
    return await MovieModel.create(data);
  }

  static async update(id: any, data: IMovieData) {
    return await MovieModel
        .findByIdAndUpdate(id, data, {useFindAndModify: false});
  }

  static async delete(id: any) {
    return await MovieModel
        .findByIdAndDelete(id);
  }
  static async countAll(id?: any) {
    return await MovieModel.count();
  }
}
