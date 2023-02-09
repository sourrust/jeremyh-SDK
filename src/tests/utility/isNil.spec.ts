import isNil from '~/utility/isNil';

describe('isNil', () => {
    it.each([null, undefined])('should be true when value is %p', (value) => {
        const actual = isNil(value);

        expect(actual).toBe(true);
    });

    it.each([
        NaN,
        1,
        false,
        'a string',
    ])('should be false when value is not null or undefined (%p)', (value) => {
        const actual = isNil(value);

        expect(actual).toBe(false);
    });
});
