import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PunchlistPage } from './punchlist.page';

describe('PunchlistPage', () => {
  let component: PunchlistPage;
  let fixture: ComponentFixture<PunchlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PunchlistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PunchlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
