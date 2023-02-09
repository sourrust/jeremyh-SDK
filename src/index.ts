import fetch from 'node-fetch';

import Movie         from './types/Movie';
import MovieQuote    from './types/MovieQuote';
import NotFoundError from './types/NotFoundError';
import Options       from './types/MovieOptions';
import Pagination    from './types/Pagination';
import getUrlParams  from './utility/getUrlParams';
import isNil         from './utility/isNil';

class TheOneSDK {
    private baseUrl = 'https://the-one-api.dev/v2';

    private apiKey: string;

    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }

    private async callAPI(url: string, searchParams?: URLSearchParams) {
        const search = !isNil(searchParams)
            ? `?${searchParams.toString()}`
            : '';

        const response = await fetch(this.baseUrl + url + search, {
            method: 'get',
            headers: { Authorization: `Bearer ${this.apiKey}` },
        });

        return response.json();
    }

    public async getMovies(options?: Options): Promise<Pagination<Movie>> {
        const search = getUrlParams(options);

        return this.callAPI('/movie', search);
    }

    public async getMovie(id: string): Promise<Movie> {
        const page: Pagination<Movie> = await this.callAPI(`/movie/${id}`);

        const movies = page.docs;

        if (movies.length === 0) {
            throw new NotFoundError();
        }

        return movies[0];
    }

    public getMovieQuotes(id: string, options?: Options): Promise<Pagination<MovieQuote>> {
        const search = getUrlParams(options);

        return this.callAPI(`/movie/${id}/quote`, search);
    }
}

export default TheOneSDK;
