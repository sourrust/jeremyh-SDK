import SortBy from './SortBy';

interface Options {
    limit?: number;
    page?: number;
    offset?: number;
    sort?: string;
    sortBy?: SortBy;
}

export default Options;
