import express, {Request, Response} from 'express';
import {schemaValidationMDW} from '../../../middlewares/schemaValidation';
import {getResponseError, ResponseService}
  from '../../../services/response/ResponseService';
import {MovieSchemaJoi} from '../schema/movie.schema';
import MovieService from '../services/MovieService';
import {IMovieData} from '../interface/movie.req.types';
import {MovieRoutes} from '../routes/routes';

const MovieController = express.Router();

/**
 * Create MOvie
 */
MovieController.post(MovieRoutes.CREATE,
    schemaValidationMDW(MovieSchemaJoi.movie, 'body'),
    async (req:Request, res:Response) => {
      try {
        const nBody: IMovieData = req.body;
        const nRes = await MovieService.create(nBody);
        if (nRes.error) {
          return ResponseService.sendError(res,
              getResponseError(nRes.message, nRes.data as number));
        }
        ResponseService.send(res, nRes.data, 201);
      } catch (error: any) {
        return ResponseService.send500(res, error);
      }
    });
/**
 * Get list of MOvie
 */
MovieController.get(MovieRoutes.LIST_BY_PAGE_SIZE,
    schemaValidationMDW(MovieSchemaJoi.paginate, 'query'),
    async (req:Request, res:Response) => {
      try {
        const size: any = req.query.size;
        const page: any = req.query.page;
        const nRes = await MovieService.movieList({page: page, size: size});
        if (nRes.error) {
          return ResponseService.sendError(res,
              getResponseError(nRes.message, nRes.data as number));
        }
        ResponseService.send(res, nRes.data, 201);
      } catch (error: any) {
        return ResponseService.send500(res, error);
      }
    });

/**
 * Get list of by date
 */
MovieController.get(MovieRoutes.LIST_BY_DATE,
    schemaValidationMDW(MovieSchemaJoi.dateParam, 'query'),
    async (req:Request, res:Response) => {
      try {
        const from: any = req.query.from;
        const to: any = req.query.to;
        const nRes = await MovieService.movieListByDate({to: to, from: from});
        if (nRes.error) {
          return ResponseService.sendError(res,
              getResponseError(nRes.message, nRes.data as number));
        }
        ResponseService.send(res, nRes.data, 201);
      } catch (error: any) {
        return ResponseService.send500(res, error);
      }
    });

/**
 * Get A record by id
 */
MovieController.get(MovieRoutes.GET,
    schemaValidationMDW(MovieSchemaJoi.id, 'query'),
    async (req:Request, res:Response) => {
      try {
        const id = req.query.id;
        const nRes = await MovieService.getSingleById(id);
        if (nRes.error) {
          return ResponseService.sendError(res,
              getResponseError(nRes.message, nRes.data as number));
        }
        ResponseService.send(res, nRes.data, 201);
      } catch (error: any) {
        return ResponseService.send500(res, error);
      }
    });

/**
 * Update record
 */
MovieController.put(MovieRoutes.UPDATE,
    schemaValidationMDW(MovieSchemaJoi.movie, 'body'),
    schemaValidationMDW(MovieSchemaJoi.id, 'query'),
    async (req:Request, res:Response) => {
      try {
        const data: IMovieData = req.body;
        const id = req.query.id;
        const nRes = await MovieService.update(id, data);
        if (nRes.error) {
          return ResponseService.sendError(res,
              getResponseError(nRes.message, nRes.data as number));
        }
        ResponseService.send(res, nRes.data, 201);
      } catch (error: any) {
        return ResponseService.send500(res, error);
      }
    });

/**
 * Delete Record
 */
MovieController.delete(MovieRoutes.DELETE,
    schemaValidationMDW(MovieSchemaJoi.id, 'query'),
    async (req:Request, res:Response) => {
      try {
        const id = req.query.id;
        const nRes = await MovieService.delete(id);
        if (nRes.error) {
          return ResponseService.sendError(res,
              getResponseError(nRes.message, nRes.data as number));
        }
        ResponseService.send(res, nRes.data, 201);
      } catch (error: any) {
        return ResponseService.send500(res, error);
      }
    });

export default MovieController;
