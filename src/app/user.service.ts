import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Constants} from './constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private  httpClient: HttpClient) {
  }

  getUserPrivileges() {
    return this.httpClient.get(Constants.OPENMRS_ROOT_URL + Constants.WHOAMI_URL);
  }
}
