import {Schema} from 'mongoose';
import {TokenEntity} from './../../entities/token/token.entities';


export const TokenSchema = new Schema<TokenEntity>({
  name: {required: false, type: String},
  type: {required: false, type: String},
  token: {required: true, type: String},
  description: {required: false, type: String},
  date: {required: false, type: String},
  userId: {required: false, type: String},
});


