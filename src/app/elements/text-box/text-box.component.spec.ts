import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBoxComponent } from './text-box.component';

describe('TextBoxComponent', () => {
  let component: TextBoxComponent;
  let fixture: ComponentFixture<TextBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Text-box component', () => {
    expect(component).toBeTruthy();
  });

  it('should have label & input elements', () => {
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('label').getAttribute('class')).toEqual('text-answer');
    expect(compiled.querySelector('input')).not.toBeNull();
  });
});
