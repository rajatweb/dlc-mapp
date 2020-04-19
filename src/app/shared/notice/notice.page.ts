import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ModalPage } from '../modal/modal.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.page.html',
  styleUrls: ['./notice.page.scss'],
})
export class NoticePage implements OnInit {
  notice;
  constructor(public activatedRoute: ActivatedRoute, public router: Router, public modalController: ModalController) {
    this.activatedRoute.queryParams.subscribe((res) => {
      console.log(JSON.parse(res.notice));
      this.notice = JSON.parse(res.notice);
    });
  }

  ngOnInit() {
  }

  async presentModal(key, name) {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: { key, name }
    });
    return await modal.present();
  }
}
