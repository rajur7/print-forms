import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormComponent } from './form.component';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormComponent],
      providers: [{provide: ActivatedRoute, useValue: {params: from([{formName: 'test form'}])}}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
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
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelectorAll('div')[0].getAttribute('class')).toEqual('form');
    expect(compiled.querySelectorAll('div')[1].getAttribute('class')).toEqual('formName');
  });
});
