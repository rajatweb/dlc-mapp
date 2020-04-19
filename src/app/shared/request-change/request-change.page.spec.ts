import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RequestChangePage } from './request-change.page';

describe('RequestChangePage', () => {
  let component: RequestChangePage;
  let fixture: ComponentFixture<RequestChangePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestChangePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RequestChangePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
