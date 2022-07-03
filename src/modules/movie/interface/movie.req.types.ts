export interface IMovieData {
    name: string;
    description: string;
    plan: string;
}

export interface IResponseFormat {
    error: boolean;
    message: string,
    data: any
  }
