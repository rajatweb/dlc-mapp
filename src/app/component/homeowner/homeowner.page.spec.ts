import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeownerPage } from './homeowner.page';

describe('HomeownerPage', () => {
  let component: HomeownerPage;
  let fixture: ComponentFixture<HomeownerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeownerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeownerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
