import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSignalComponent } from './test-signal.component';

describe('TestSignalComponent', () => {
  let component: TestSignalComponent;
  let fixture: ComponentFixture<TestSignalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestSignalComponent]
    });
    fixture = TestBed.createComponent(TestSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
