export interface IPaginate {
    page: number;
    size: number;
}

export interface IPaginateDate {
    page: number;
    size: number;
    date: Date | string;
}

export interface IDateRange {
    from: Date | string;
    to: Date | string;
}
