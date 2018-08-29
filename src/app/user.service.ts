import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Constants} from './constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private WHOAMI = 'bahmnicore/whoami';

  constructor(private  httpClient: HttpClient) {
  }

  getUserPrivileges() {
    return this.httpClient.get(Constants.OPENMRS_ROOT_URL + this.WHOAMI);
  }
}
