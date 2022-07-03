import {model} from 'mongoose';
import {MovieSchema} from '../../schema/movie/movie.schema';

export const MovieModel = model('movie', MovieSchema);
