import isEqualParam from './is-equal-param';

describe('isEqualParam', () => {
  it('should return true when matches', () => {
    expect.assertions(1);

    const expected = true;
    const path = 'foo';
    const value = 0;
    const request = {
      params: {
        foo: 0,
      },
    };

    const actual = isEqualParam(request, path, value);

    expect(actual).toEqual(expected);
  });

  it('should return false when doesn\'t match', () => {
    expect.assertions(1);

    const expected = false;
    const path = 'foo';
    const value = 0;
    const request = {
      params: {
        foo: 1,
      },
    };

    const actual = isEqualParam(request, path, value);

    expect(actual).toEqual(expected);
  });

  it('should return false when path is not available', () => {
    expect.assertions(1);

    const expected = false;
    const path = 'foo';
    const value = 0;
    const request = {
      params: {},
    };

    const actual = isEqualParam(request, path, value);

    expect(actual).toEqual(expected);
  });

  it('should return false when path is not string', () => {
    expect.assertions(1);

    const expected = false;
    const path = null;
    const value = 0;
    const request = {
      params: {
        foo: 0,
      },
    };

    const actual = isEqualParam(request, path, value);

    expect(actual).toEqual(expected);
  });

  it('should return false when request is empty', () => {
    expect.assertions(1);

    const expected = false;
    const path = 'foo';
    const value = 0;
    const request = {};

    const actual = isEqualParam(request, path, value);

    expect(actual).toEqual(expected);
  });
});
