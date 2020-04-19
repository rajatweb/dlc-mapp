import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BoardmemberPage } from './boardmember.page';

describe('BoardmemberPage', () => {
  let component: BoardmemberPage;
  let fixture: ComponentFixture<BoardmemberPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardmemberPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BoardmemberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
