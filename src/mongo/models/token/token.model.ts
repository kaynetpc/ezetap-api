import {model} from 'mongoose';
import {TokenSchema} from '../../schema/token/token.schema';

export const TokenModel = model('tokens', TokenSchema);
