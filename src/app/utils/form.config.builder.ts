export class FormConfigBuilder {

  public static build(form: any, appConfig: any) {
    const formJson = Object.create({});
    formJson.name = form.name.display;
    formJson.set = form.set;
    formJson.datatype = form.datatype.display;
    formJson.answers = [];
    formJson.class = form.conceptClass.name;
    formJson.range = [form.lowNormal, form.hiNormal];
    if (form.answers.length > 0) {
      form.answers.map( answer => formJson.answers.push(answer.name.display));
    }

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
