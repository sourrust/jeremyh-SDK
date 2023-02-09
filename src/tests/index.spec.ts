import fetchMock from 'node-fetch';
import TheOneSDK from '~/index';

jest.mock('node-fetch', () => jest.fn(() => Promise.resolve({
    json: () => Promise.resolve({ docs: [{}] }),
})));

const baseUrl = 'https://the-one-api.dev/v2';

describe('TheOneSDK', () => {
    afterEach(() => {
        (fetchMock as any as jest.Mock).mockClear();
    });

    it('should call `/movie` url', async () => {
        const key = 'test-api-key';
        const sdk = new TheOneSDK(key);

        await sdk.getMovies();

        expect(fetchMock).toHaveBeenCalledWith(
            `${baseUrl}/movie`,
            {
                method: 'get',
                headers: { Authorization: `Bearer ${key}` },
            }
        );
    });

    it('should call `/movie` url with query string', async () => {
        const key = 'test-api-key';
        const sdk = new TheOneSDK(key);

        await sdk.getMovies({
            page: 2,
            limit: 25,
        });

        expect(fetchMock).toHaveBeenCalledWith(
            `${baseUrl}/movie?limit=25&page=2`,
            {
                method: 'get',
                headers: { Authorization: `Bearer ${key}` },
            }
        );
    });

    it('should call `/movie/:id` url', async () => {
        const key = 'test-api-key';
        const sdk = new TheOneSDK(key);

        await sdk.getMovie('44');

        expect(fetchMock).toHaveBeenCalledWith(
            `${baseUrl}/movie/44`,
            {
                method: 'get',
                headers: { Authorization: `Bearer ${key}` },
            }
        );
    });

    it('should call `/movie/:id/quote` url', async () => {
        const key = 'test-api-key';
        const sdk = new TheOneSDK(key);

        await sdk.getMovieQuotes('122');

        expect(fetchMock).toHaveBeenCalledWith(
            `${baseUrl}/movie/122/quote`,
            {
                method: 'get',
                headers: { Authorization: `Bearer ${key}` },
            }
        );
    });

    it('should call `/movie/:id/quote` url with query string', async () => {
        const key = 'test-api-key';
        const sdk = new TheOneSDK(key);

        await sdk.getMovieQuotes('122', {
            sort: 'character',
        });

        expect(fetchMock).toHaveBeenCalledWith(
            `${baseUrl}/movie/122/quote?sort=character%3Aasc`,
            {
                method: 'get',
                headers: { Authorization: `Bearer ${key}` },
            }
        );
    });
});
