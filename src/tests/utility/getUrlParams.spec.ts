import getUrlParams from '~/utility/getUrlParams';

describe('getUrlParams', () => {
    it.each([
        undefined,
        null,
        {} as any,
    ])('should return undefined when %p is passed', (value) => {
        const actual = getUrlParams(value);

        expect(actual).toBeUndefined();
    });
});
