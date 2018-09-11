import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Constants} from './constants';
import {FormConfigBuilder} from './utils/form.config.builder';

@Injectable({
  providedIn: 'root'
})
export class ConceptsService {

  constructor(private http: HttpClient) {
  }

  getAllObservationTemplates() {
    return this.http.get(Constants.OPENMRS_ROOT_URL + Constants.ALL_OBSERVATION_TEMPLATES_URL);
  }

  private getFormDetails(formName: String) {
    return this.http.get(Constants.OPENMRS_ROOT_URL + Constants.FORM_DETAILS_URL +
      formName + Constants.BAHMNI_RESOURCE_URL);
  }

  private getAppConfig() {
    return this.http.get(Constants.CONFIG_FILE_PATH);
  }

  getFormConfiguration(formName) {
    this.getAppConfig().subscribe( (config: { config: any }) => {
      this.getFormDetails(formName).subscribe((formDetails: { results: any }) => {
        const appConfig = config.config.conceptSetUI;
        return FormConfigBuilder.build(formDetails.results[0], appConfig);
      });
    });
  }
}
