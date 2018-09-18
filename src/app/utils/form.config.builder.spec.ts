import { FormConfigBuilder } from './form.config.builder';

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
          setMembers: [],
          answers: []
        }],
        answers: []
      }],
      answers: []
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
      name: 'Vitals',
      set: true,
      datatype: 'N/A',
      setMembers: [{
        name: 'Heart Rate',
        set: true,
        datatype: 'N/A',
        setMembers: [{name: 'Weight', set: false, datatype: 'date', config: undefined, answers: []}],
        answers: [],
        config: {allowAddMore: true}
      }], config: {showPanelView: false},
      answers: []
    };

    const actualConfig = FormConfigBuilder.build(formDetails, appConfig);

    expect(actualConfig).toEqual(expectedConfig);
  });

  it('should build configuration, given form with no set members', function () {
    const formDetails = {
      name: {display: 'Vitals', name: 'Vitals'},
      set: true,
      datatype: {display: 'N/A'},
      setMembers: [],
      answers: []
    };

    const appConfig = {
      'Vitals': {
        'showPanelView': false
      }
    };

    const expectedConfig = {
      name: 'Vitals',
      set: true,
      datatype: 'N/A',
      config: {showPanelView: false},
      answers: []
    };

    const actualConfig = FormConfigBuilder.build(formDetails, appConfig);

    expect(actualConfig).toEqual(expectedConfig);
  });

  it('should build configuration, given form with no answers', function () {
    const formDetails = {
      name: {display: 'Vitals', name: 'Vitals'},
      set: true,
      datatype: {display: 'N/A'},
      setMembers: [],
      answers: []
    };

    const appConfig = {
      'Vitals': {
        'showPanelView': false
      }
    };

    const expectedConfig = {
      name: 'Vitals',
      set: true,
      datatype: 'N/A',
      config: {showPanelView: false},
      answers: []
    };

    const actualConfig = FormConfigBuilder.build(formDetails, appConfig);

    expect(actualConfig).toEqual(expectedConfig);
  });

  it('should build configuration, given form with answers', function () {
    const formDetails = {
      name: {display: 'Vitals', name: 'Vitals'},
      set: true,
      datatype: {display: 'Coded'},
      setMembers: [],
      answers: [{name : {display: 'Abdominal pain'}}, {name : {display: 'Abdominal Lump'}}, {name : {display: 'Anorexia'}}]
    };

    const appConfig = {
      'Vitals': {
        'showPanelView': false
      }
    };

    const expectedConfig = {
      name: 'Vitals',
      set: true,
      datatype: 'Coded',
      config: {showPanelView: false},
      answers: ['Abdominal pain', 'Abdominal Lump', 'Anorexia']
    };

    const actualConfig = FormConfigBuilder.build(formDetails, appConfig);

    expect(actualConfig).toEqual(expectedConfig);
  });
});
