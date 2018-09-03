import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Constants} from './constants';

@Injectable({
  providedIn: 'root'
})
export class ConceptsService {
  private UrlForGettingListOfForms = 'concept?s=byFullySpecifiedName&locale=en&name=All+Observation+Templates&v=' +
    'custom:(setMembers:(display))';
  constructor(private http: HttpClient) { }

  getListOfForms() {
    return this.http.get(Constants.OPENMRS_ROOT_URL + this.UrlForGettingListOfForms);
  }
}
