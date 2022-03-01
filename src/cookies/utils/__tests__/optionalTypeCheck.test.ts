import { optionalTypeCheck } from '../optionalTypeCheck';

describe('optionalTypeCheck', () => {
  it('returns true when the given value is of the given type', () => {
    expect(optionalTypeCheck('the', 'string')).toBe(true);
    expect(optionalTypeCheck(7, 'number')).toBe(true);
    expect(optionalTypeCheck(false, 'boolean')).toBe(true);
    expect(optionalTypeCheck({}, 'object')).toBe(true);
    expect(optionalTypeCheck(null, 'object')).toBe(true);
  });

  it('always returns true when given undefined, regardless of type', () => {
    expect(optionalTypeCheck(undefined, 'string')).toBe(true);
    expect(optionalTypeCheck(undefined, 'number')).toBe(true);
    expect(optionalTypeCheck(undefined, 'boolean')).toBe(true);
    expect(optionalTypeCheck(undefined, 'object')).toBe(true);
    expect(optionalTypeCheck(undefined, 'undefined')).toBe(true);
  });

  it("returns false when the given value's type doesn't match given type", () => {
    expect(optionalTypeCheck(7, 'string')).toBe(false);
    expect(optionalTypeCheck(false, 'string')).toBe(false);
    expect(optionalTypeCheck({}, 'string')).toBe(false);
    expect(optionalTypeCheck(null, 'string')).toBe(false);

    expect(optionalTypeCheck('the', 'number')).toBe(false);
    expect(optionalTypeCheck(false, 'number')).toBe(false);
    expect(optionalTypeCheck({}, 'number')).toBe(false);
    expect(optionalTypeCheck(null, 'number')).toBe(false);

    expect(optionalTypeCheck('the', 'boolean')).toBe(false);
    expect(optionalTypeCheck(7, 'boolean')).toBe(false);
    expect(optionalTypeCheck({}, 'boolean')).toBe(false);
    expect(optionalTypeCheck(null, 'boolean')).toBe(false);

    expect(optionalTypeCheck('the', 'object')).toBe(false);
    expect(optionalTypeCheck(7, 'object')).toBe(false);
    expect(optionalTypeCheck(false, 'object')).toBe(false);
  });
});
