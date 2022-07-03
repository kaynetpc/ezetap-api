
export interface IToken {
    name?: string;
    type?: 'access_token' | 'refresh_token';
    token: string;
    description?: string;
    date?: string;
    userId?: string;
};
