import {Response} from 'express';
import ResponseError from './ResponseError';
/*
    data: T;
    status: number;
    statusText: "failed" | "success";
    error: boolean;
    message: string;
*/

export interface IResponseFormat<T = any> {
  error?: boolean;
  status?: string;
  data?: T;
  message: string;
  statusCode?: number;
}

const responseFormat = (error: boolean,
    data: any, message: string, status: number) => ({
  error, data, message, status, statusText: error ? 'failed' : 'success',
});

export const getResponseError = (message: string, status: number) => {
  return new ResponseError(message, status);
};

export const ResponseService = {
  send400(response: Response, error: ResponseError) {
    response.status(400).json(responseFormat(true, null, error.message, 400));
  },

  send401(response: Response, error: ResponseError) {
    response.status(401).json(responseFormat(true, null, error.message, 401));
  },
  send404(response: Response, error: ResponseError) {
    response.status(404).json(responseFormat(true, null, error.message, 404));
  },
  send500(response: Response, error: ResponseError) {
    response.status(500).json(responseFormat(true, null, error.message, 500));
  },

  sendError(response: Response, error: ResponseError | any) {
    response.status(error.status)
        .json(responseFormat(true, null, error.message, error.status));
  },

  json(response: Response, data: any, status: number) {
    response.status(status).json(responseFormat(false, data, '', status));
  },
  send(response: Response, data: any, status: number) {
    response.status(status).json(responseFormat(false, data, '', status));
  },
  raw(response: Response, data: any, status: number) {
    response.status(status).send(data);
  },
};
