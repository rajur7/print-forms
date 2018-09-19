import { ConceptUtils } from './concept.utils';

describe('Concept Utils', () => {

  it('should give true if config has isTabular property is true', function () {
    const testConfig = {
      config: { isTabular : true },
    };

    expect(ConceptUtils.isTabular(testConfig)).toBeTruthy();
  });

  it('should give false if config has isTabular property is set as false', function () {
    const testConfig = {
      config: { isTabular : false },
    };

    expect(ConceptUtils.isTabular(testConfig)).toBeFalsy();
  });

  it('should give false if config has no property of isTabular', function () {
    const testConfig = {
      config: { isAddMore : false },
    };

    expect(ConceptUtils.isTabular(testConfig)).toBeFalsy();
  });
});
