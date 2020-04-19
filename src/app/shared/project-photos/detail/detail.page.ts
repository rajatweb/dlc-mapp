import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalPage } from '../../modal/modal.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  items;
  constructor(public activatedRoute: ActivatedRoute,
              public router: Router,
              public modalController: ModalController) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((res) => {
      console.log(JSON.parse(res.items).value);
      this.items = JSON.parse(res.items).value;
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
