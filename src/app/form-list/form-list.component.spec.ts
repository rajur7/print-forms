import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormListComponent } from './form-list.component';
import { FilterPipe } from '../filter.pipe';
import { FormsModule } from '@angular/forms';
import { ConceptsService } from '../concepts.service';
import { instance, mock, verify, when } from 'ts-mockito';
import { Observable } from 'rxjs';

describe('FormListComponent', () => {
  let component: FormListComponent;
  let fixture: ComponentFixture<FormListComponent>;
  const ConceptServiceMock: ConceptsService = mock(ConceptsService);
  const conceptServiceMock: ConceptsService = instance(ConceptServiceMock);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ FormListComponent, FilterPipe ],
      providers: [{provide: ConceptsService, useValue: conceptServiceMock}]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FormListComponent);
    component = fixture.componentInstance;
    when(ConceptServiceMock.getAllObservationTemplates()).thenReturn(mock(Observable));
  }));

  it('should create Form list component', () => {
    expect(component).toBeTruthy();
  });

  it('should verify common html elements', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('div').getAttribute('class')).toContain('searchbox');
    expect(compiled.querySelector('input').getAttribute('class')).toContain('search_input');
  });

  it('should not have li & ul elements when formNames list is empty', () => {
    component.formNames = [];
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('ul')).toBeNull();
    expect(compiled.querySelector('li')).toBeNull();
  });

  it('should have li & ul elements when formNames list is not empty', () => {
    component.formNames = ['form 1'];
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('ul')).not.toBeNull();
    expect(compiled.querySelector('li')).not.toBeNull();
  });

  it('should call getAllObservationTemplates on app initialization', async(() => {
    component.ngOnInit();

    verify(ConceptServiceMock.getAllObservationTemplates()).called();
  }));

  it('should have list of form names, when observationTemplates have data on app initialization', async(() => {
    component.observationTemplates = [{display: 'History and Examination'}, {display: 'Vitals'}, {display: 'Second Vitals'}];
    component.ngDoCheck();

    expect(component.formNames).toEqual(['History and Examination', 'Vitals', 'Second Vitals']);
  }));

  it('formNames should be undefined, when observationTemplates doesn\'t have data', async(() => {
    component.ngDoCheck();

    expect(component.formNames).toBeUndefined();
  }));

});
