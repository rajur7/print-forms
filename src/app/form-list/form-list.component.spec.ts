import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormListComponent } from './form-list.component';
import {FilterPipe} from '../filter.pipe';
import {FormsModule} from '@angular/forms';

describe('FormListComponent', () => {
  let component: FormListComponent;
  let fixture: ComponentFixture<FormListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ FormListComponent, FilterPipe]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormListComponent);
    component = fixture.componentInstance;
  });

  it('should create Form list component', () => {
    expect(component).toBeTruthy();
  });

  it('should verify common html elements', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('div').getAttribute('class')).toContain('searchbox');
    expect(compiled.querySelector('input').getAttribute('class')).toContain('search_input');
  });

  it('should not have li & ul elements when concepts list is empty', () => {
    component.concepts = [];
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('ul')).toBeNull();
    expect(compiled.querySelector('li')).toBeNull();
  });

  it('should have li & ul elements when concepts list is not empty', () => {
    component.concepts = ['concept 1'];
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('ul')).not.toBeNull();
    expect(compiled.querySelector('li')).not.toBeNull();
  });
});
