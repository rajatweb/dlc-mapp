import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddendumsPage } from './addendums.page';

describe('AddendumsPage', () => {
  let component: AddendumsPage;
  let fixture: ComponentFixture<AddendumsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddendumsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddendumsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
