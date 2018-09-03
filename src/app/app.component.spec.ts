import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { UserService } from './user.service';
import {ConceptsService} from './concepts.service';
import { instance, mock, verify, when } from 'ts-mockito';
import { Observable } from 'rxjs';

describe('AppComponent', () => {
  const UserServiceMock: UserService = mock(UserService);
  const ConceptServiceMock: ConceptsService = mock(ConceptsService);
  const userServiceMock: UserService = instance(UserServiceMock);
  const conceptServiceMock: ConceptsService = instance(ConceptServiceMock);
  let fixture: any;
  let app: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        ErrorMessageComponent
      ],
      providers : [{ provide: UserService, useValue: userServiceMock}, {provide: ConceptsService, useValue: conceptServiceMock}]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    when(UserServiceMock.getUserPrivileges()).thenReturn(mock(Observable));
    when(ConceptServiceMock.getListOfForms()).thenReturn(mock(Observable));

  }));

  it('should call getUserPrivileges on app initialization', async(() => {
    app.ngOnInit();

    verify(UserServiceMock.getUserPrivileges()).called();
  }));

  it('should call getListOfForms on app initialization', async(() => {
    app.ngOnInit();
    verify(ConceptServiceMock.getListOfForms()).called();
  }));

  it('should set hasPrivilege to true when there is app:print-forms privilege', async(() => {
    app.privileges = [{name: 'app:print-forms'}, {name: 'app:clinical'}];

    app.ngDoCheck();

    expect(app.hasPrivilege).toBeTruthy();
  }));

  it('should set hasPrivilege to false when there is no app:print-forms privilege', async(() => {
    app.privileges = [{name: 'app:clinical'}];
    app.ngDoCheck();

    expect(app.hasPrivilege).toBeFalsy();
  }));

  it('should not set hasPrivilege when privileges list is empty', async(() => {
    app.ngDoCheck();

    expect(app.hasPrivilege).toBeUndefined();
  }));

  it('should render app-header component', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('app-header')).not.toBe(null);
  }));

  it('should render router-outlet when hasPrivilege is true', async(() => {
    app.hasPrivilege = true;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('router-outlet')).not.toBe(null);
  }));

  it('should render error-component when hasPrivilege is false', async(() => {
    app.hasPrivilege = false;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('router-outlet')).toBe(null);
    expect(compiled.querySelector('app-error-message')).not.toBe(null);
  }));
});
