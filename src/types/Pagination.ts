interface Pagination<T = any> {
    docs: T[];
    total: number;
    limit: number;
    offset: number;
    page: number;
    pages: number;
}

export default Pagination;
