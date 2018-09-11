import {FormConfigBuilder} from './form.config.builder';

describe('Form Config Builder', () => {

  it('should build configuration, given form with 2 levels of set members', function () {
    const formDetails = {
      name: {display: 'Vitals', name: 'Vitals'},
      set: true,
      datatype: {display: 'N/A'},
      setMembers: [{
        name: {display: 'Heart Rate', name: 'Heart Rate'},
        set: true,
        datatype: {display: 'N/A'},
        setMembers: [{
          name: {display: 'Weight'},
          uuid: 'fhjfhgff67687',
          set: false,
          datatype: {display: 'date'},
          setMembers: []
        }]
      }]
    };
    const appConfig = {
      'Vitals': {
        'showPanelView': false
      },
      'Heart Rate': {
        'allowAddMore': true
      }
    };
    const expectedConfig = {
      formName: 'Vitals',
      set: true,
      datatype: 'N/A',
      setMembers: [{
        formName: 'Heart Rate',
        set: true,
        datatype: 'N/A',
        setMembers: [{formName: 'Weight', set: false, datatype: 'date', config: undefined}],
        config: {allowAddMore: true}
      }], config: {showPanelView: false}
    };

    const actualConfig = FormConfigBuilder.build(formDetails, appConfig);

    expect(actualConfig).toEqual(expectedConfig);
  });

 it('should build configuration, given form with no set members', function () {
    const formDetails = {
      name: {display: 'Vitals', name: 'Vitals'},
      set: true,
      datatype: {display: 'N/A'},
      setMembers: []
      };

    const appConfig = {
      'Vitals': {
        'showPanelView': false
      }
    };

    const expectedConfig = {
      formName: 'Vitals',
      set: true,
      datatype: 'N/A',
      config: {showPanelView: false}
    };

    const actualConfig = FormConfigBuilder.build(formDetails, appConfig);

    expect(actualConfig).toEqual(expectedConfig);
  });
});
