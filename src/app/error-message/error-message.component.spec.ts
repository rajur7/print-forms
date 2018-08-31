import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorMessageComponent } from './error-message.component';

import * as ngClipBoard from 'angular-6-clipboard';

describe('ErrorMessageComponent', () => {
  let component: ErrorMessageComponent;
  let fixture: ComponentFixture<ErrorMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorMessageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should set hasVisibility to false', () => {
    const errorMessageComponent = TestBed.createComponent(ErrorMessageComponent).debugElement.componentInstance;

    errorMessageComponent.hideMessage();

    expect(errorMessageComponent.hasVisibility).toBe(false);
  });

  it('should call ngCopy on copyMessage call', () => {
    const errorMessageComponent = TestBed.createComponent(ErrorMessageComponent).debugElement.componentInstance;
    const ngCopySpy = spyOn(ngClipBoard, 'ngCopy');

    errorMessageComponent.copyMessage();

    expect(ngCopySpy).toHaveBeenCalled();
  });

  it('should have error message container when hasVisibility is true', () => {
    const compiled = fixture.debugElement.nativeElement;
    const divElement = compiled.querySelectorAll('div');
    const buttonElement = compiled.querySelectorAll('button');

    expect(divElement.length).toBe(3);
    expect(divElement[0].getAttribute('class')).toContain('error-message-container');
    expect(divElement[1].getAttribute('class')).toContain('message');
    expect(divElement[2].getAttribute('class')).toContain('button-wrapper');
    expect(buttonElement[0].getAttribute('class')).toContain('copy-btn fl');
    expect(buttonElement[1].getAttribute('class')).toContain('show-btn fr');
  });

  it('should not have error message container when hasVisibility is false', () => {
    const errorMessageComponent = TestBed.createComponent(ErrorMessageComponent).debugElement;
    const instance = errorMessageComponent.componentInstance;
    instance.hideMessage();
    const compiled = errorMessageComponent.nativeElement;
    const errorMessageContainer = compiled.querySelector('.error-message-container');

    expect(errorMessageContainer).toBe(null);
  });
});
