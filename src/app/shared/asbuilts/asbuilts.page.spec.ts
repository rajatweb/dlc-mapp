import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AsbuiltsPage } from './asbuilts.page';

describe('AsbuiltsPage', () => {
  let component: AsbuiltsPage;
  let fixture: ComponentFixture<AsbuiltsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsbuiltsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AsbuiltsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
