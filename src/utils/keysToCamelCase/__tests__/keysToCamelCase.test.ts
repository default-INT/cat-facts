import { keysToCamelCase } from '../keysToCamelCase';

describe('tests for keysToCamelCase', () => {
  it('should return primitive value', () => {
    const mockValue = '__MOCK_VALUE__';

    expect(keysToCamelCase(mockValue)).toEqual(mockValue);
  });

  it('should return array value', () => {
    const mockValue = [1, 2, '__TEXT__', true, null, undefined, NaN];

    expect(keysToCamelCase(mockValue)).toEqual(mockValue);
  });

  it('should return formatted obj', () => {
    const actualValue = {
      prop_val_1: 'prop_val_1',
      prop_val_2: 'prop_val_2',
      prop_val_val_long: 'prop_val_val_long',
      prop: 'prop',
      camelCaseProp: 'camelCaseProp',
    };

    const expectedValue = {
      propVal1: 'prop_val_1',
      propVal2: 'prop_val_2',
      propValValLong: 'prop_val_val_long',
      prop: 'prop',
      camelCaseProp: 'camelCaseProp',
    };

    expect(keysToCamelCase(actualValue)).toEqual(expectedValue);
  });

  it('should return formatted obj array', () => {
    const actualValue = [
      { prop_val_1: 'prop_val_1' },
      { prop_val_2: 'prop_val_2' },
      { prop_val_3: 'prop_val_3', prop_val_4: 'prop_val_4' },
    ];

    const expectedValue = [
      { propVal1: 'prop_val_1' },
      { propVal2: 'prop_val_2' },
      { propVal3: 'prop_val_3', propVal4: 'prop_val_4' },
    ];

    expect(keysToCamelCase(actualValue)).toEqual(expectedValue);
  });

  it('should return formatted deep obj', () => {
    const actualValue = {
      prop_val_1: 'prop_val_1',
      prop_val_2: 'prop_val_2',
      inner_obj: {
        prop_val_3: 'prop_val_3',
        inner_obj_2: {
          prop_val_4: 'prop_val_4',
          array: [{ inner_array_obj: { prop_val_5: 'prop_val_5' } }],
        },
      },
    };

    const expectedValue = {
      propVal1: 'prop_val_1',
      propVal2: 'prop_val_2',
      innerObj: {
        propVal3: 'prop_val_3',
        innerObj2: {
          propVal4: 'prop_val_4',
          array: [{ innerArrayObj: { propVal5: 'prop_val_5' } }],
        },
      },
    };

    expect(keysToCamelCase(actualValue)).toEqual(expectedValue);
  });

  it('should return obj', () => {
    const actualExpectValue = {
      propVal1: 'propVal1',
      propVal2: 'propVal2',
      propVal3: 'propVal3',
    };

    expect(keysToCamelCase(actualExpectValue)).toEqual(actualExpectValue);
  });
});
