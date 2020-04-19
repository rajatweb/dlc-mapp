import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ModalPage } from '../modal/modal.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-change-order',
  templateUrl: './change-order.page.html',
  styleUrls: ['./change-order.page.scss'],
})
export class ChangeOrderPage implements OnInit {
  changeOrder;
  constructor(public activatedRoute: ActivatedRoute, public router: Router, public modalController: ModalController) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((res) => {
      this.changeOrder = JSON.parse(res.changeOrder);
    });
  }


  async presentModal(key, name) {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: { key, name }
    });
    return await modal.present();
  }
}
