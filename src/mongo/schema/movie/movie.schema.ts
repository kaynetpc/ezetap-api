import {Schema} from 'mongoose';
import {MovieEntity} from '../../entities/movie/movie.entities';


export const MovieSchema = new Schema<MovieEntity>({
  name: {required: true, type: String},
  description: {required: false, type: String},
  plan: {required: false, type: String},

}, {
  timestamps: true,
});


