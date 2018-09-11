export class FormConfigBuilder {

  static build(form: any, appConfig: any) {
    const formJson = Object.create({});
    formJson.formName = form.name.display;
    formJson.set = form.set;
    formJson.datatype = form.datatype.display;

    if (form.setMembers.length > 0) {
      formJson.setMembers = FormConfigBuilder.buildSetMembers(form.setMembers, appConfig);
    }

    formJson.config = appConfig[form.name.name];
    return formJson;
  }

  private static buildSetMembers(setMembers: any, appConfig: any) {
    return setMembers.map(setMember => FormConfigBuilder.build(setMember, appConfig));
  }
}
