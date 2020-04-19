import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChangeOrderPage } from './change-order.page';

describe('ChangeOrderPage', () => {
  let component: ChangeOrderPage;
  let fixture: ComponentFixture<ChangeOrderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeOrderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChangeOrderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
