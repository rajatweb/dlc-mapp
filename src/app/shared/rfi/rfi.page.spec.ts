import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RfiPage } from './rfi.page';

describe('RfiPage', () => {
  let component: RfiPage;
  let fixture: ComponentFixture<RfiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RfiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RfiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
