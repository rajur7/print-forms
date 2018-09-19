import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormComponent } from './form.component';
import { ActivatedRoute } from '@angular/router';
import { from, of } from 'rxjs';
import { FormConfigBuilder } from '../utils/form.config.builder';
import { instance, mock, verify, when } from 'ts-mockito';
import { ConceptsService } from '../concepts.service';
import { ConceptSetComponent } from '../concept-set/concept-set.component';
import { ConceptComponent } from '../concept/concept.component';
import { TextBoxComponent } from '../elements/text-box/text-box.component';
import { TabularViewComponent } from '../tabular-view/tabular-view.component';
import { ConceptUtils } from '../utils/concept.utils';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  const ConceptServiceMock: ConceptsService = mock(ConceptsService);
  const conceptServiceMock: ConceptsService = instance(ConceptServiceMock);
  let formConfigBuilder: FormConfigBuilder;
  let conceptUtils: ConceptUtils;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormComponent, ConceptSetComponent, ConceptComponent, TextBoxComponent, TabularViewComponent],
      providers: [{provide: ActivatedRoute, useValue: {params: from([{formName: 'test form'}])}},
        {provide: ConceptsService, useValue: conceptServiceMock}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    const appConfig = of({config : {
        conceptSetUI: 'appConfig'
      }});
    const formDetails = of({results : ['formDetails']});
    when(ConceptServiceMock.getAppConfig()).thenReturn(appConfig);
    when(ConceptServiceMock.getFormDetails('test form')).thenReturn(formDetails);
    formConfigBuilder = spyOn(FormConfigBuilder, 'build');
    conceptUtils = spyOn(ConceptUtils, 'isTabular');
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
  });

  it('should create Form component', () => {
    expect(component).toBeTruthy();
  });

  it('should get formName from route params in constructor', () => {
    expect(component.name).toBe('test form');
  });

  it('should display div element with class form and formName', () => {
    component.form = {};
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelectorAll('div')[0].getAttribute('class')).toEqual('form');
    expect(compiled.querySelectorAll('div')[1].getAttribute('class')).toEqual('formName');
  });

  it('should call form config builder with given app config and form details', function () {
    verify(ConceptServiceMock.getAppConfig()).called();
    verify(ConceptServiceMock.getFormDetails('test form')).called();
    expect(formConfigBuilder).toHaveBeenCalledWith('formDetails', 'appConfig' );
  });

  it('should display concept and concept-set component when set members list is not empty', function () {
    component.form = {name: 'test form', setMembers : [{name: 'member1', set: true}, {name: 'member2', set: false}]};
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelectorAll('app-concept-set').length).toBe(1);
    expect(compiled.querySelectorAll('app-concept').length).toBe(1);
    expect(compiled.querySelector('app-concept-set')).not.toBeNull();
    expect(compiled.querySelector('app-concept')).not.toBeNull();
  });

  it('should call isTabular method of conceptUtils', () => {
    const member = {};
    component.isTabular(member);

    expect(conceptUtils).toHaveBeenCalledWith(member);
  });
});
