import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpecificationPage } from './specification.page';

describe('SpecificationPage', () => {
  let component: SpecificationPage;
  let fixture: ComponentFixture<SpecificationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecificationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpecificationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
