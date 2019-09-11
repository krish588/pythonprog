import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpnavbarComponent } from './spnavbar.component';

describe('SpnavbarComponent', () => {
  let component: SpnavbarComponent;
  let fixture: ComponentFixture<SpnavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpnavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
