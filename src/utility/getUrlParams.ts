import Options from '../types/MovieOptions';
import SortBy  from '../types/SortBy';
import isNil   from './isNil';

function getUrlParams(options?: Options) {
    if (isNil(options) || Object.keys(options).length < 1) {
        return undefined;
    }

    const params = new URLSearchParams();

    if (!isNil(options.limit)) {
        params.set('limit', `${options.limit}`);
    }

    if (!isNil(options.page)) {
        params.set('page', `${options.page}`);
    }

    if (!isNil(options.offset)) {
        params.set('offset', `${options.offset}`);
    }

    if (!isNil(options.sort)) {
        params.set('sort', `${options.sort}:${options.sortBy ?? SortBy.Ascending}`);
    }

    return params;
}

export default getUrlParams;
