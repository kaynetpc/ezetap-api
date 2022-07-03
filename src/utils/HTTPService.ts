import axios, {Method} from 'axios';

type IGetParams = {
    url: string;
    data?: any;
    auth: any;
    baseURL: string;
    method: Method;
    port?: any
}

export const HttpSever = async (params: IGetParams) => {
  const {url, baseURL, data, auth, method} = params;
  const caller = await axios({
    method: method,
    baseURL: baseURL,
    url: url,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': auth,
    },
    data: data,
  });
  return caller;
};

