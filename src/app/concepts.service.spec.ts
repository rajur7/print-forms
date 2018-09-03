import { getTestBed, TestBed, inject } from '@angular/core/testing';
import {Constants} from './constants';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { ConceptsService } from './concepts.service';

describe('ConceptsService', () => {
  let service: ConceptsService;
  let httpMock: HttpTestingController;
  let injector: TestBed;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ConceptsService]
    });
    injector = getTestBed();
    service = injector.get(ConceptsService);
    httpMock = injector.get(HttpTestingController);
  });

  it('should be created', inject([ConceptsService], () => {
    expect(service).toBeTruthy();
  }));
  it('should make a call on http for getting list of forms', function () {
  const UrlForGettingListOfForms = 'concept?s=byFullySpecifiedName&locale=en&name=All+Observation+Templates&v=' +
      'custom:(setMembers:(display))';
    service.getListOfForms().subscribe();
    const testRequest = httpMock.expectOne(Constants.OPENMRS_ROOT_URL + UrlForGettingListOfForms);
    expect(testRequest.request.method).toBe('GET');
  });
});
