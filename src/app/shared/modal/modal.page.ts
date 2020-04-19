import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  key: string;
  pdfName: string;

  constructor(public navParams: NavParams, public viewCtrl: ModalController) { }

  ngOnInit() {
    this.key = this.navParams.get('key');
    this.pdfName = this.navParams.get('name');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
