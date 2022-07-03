import {AppConfigs} from '../configs/app';

export const LogService = {
  log(error: any) {
    console.error(error);
  },
  info(info: any) {
    AppConfigs.IS_DEV && console.log(info);
  },
  error(info: any) {
    console.log(info);
  },
};
