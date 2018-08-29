import {getTestBed, inject, TestBed} from '@angular/core/testing';

import {UserService} from './user.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {Constants} from './constants';

describe('UserService', () => {
  let injector: TestBed;
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });

    injector = getTestBed();
    service = injector.get(UserService);
    httpMock = injector.get(HttpTestingController);
  });

  it('should be created', inject([UserService], () => {
    expect(service).toBeTruthy();
  }));

  it('should make a get call on http with whoami parameter', () => {
    service.getUserPrivileges().subscribe(() => {
    });
    const testRequest = httpMock.expectOne(Constants.OPENMRS_ROOT_URL + 'bahmnicore/whoami');
    expect(testRequest.request.method).toBe('GET');
  });
});
