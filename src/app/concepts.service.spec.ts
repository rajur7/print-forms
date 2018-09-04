import { getTestBed, TestBed, inject } from '@angular/core/testing';
import { Constants } from './constants';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
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

  it('should make a call on http with ALL_OBSERVATION_TEMPLATES_URL for getting All Observation Templates', function () {
    service.getAllObservationTemplates().subscribe();

    const testRequest = httpMock.expectOne(Constants.OPENMRS_ROOT_URL + Constants.ALL_OBSERVATION_TEMPLATES_URL);
    expect(testRequest.request.method).toBe('GET');
  });

});
