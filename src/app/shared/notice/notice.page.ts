import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { PdfViewerService } from '../../api/pdf-viewer.service';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.page.html',
  styleUrls: ['./notice.page.scss'],
})
export class NoticePage implements OnInit {
  notice;
  constructor(public activatedRoute: ActivatedRoute, public router: Router, private pdf: PdfViewerService) {
    this.activatedRoute.queryParams.subscribe((res) => {
      this.notice = JSON.parse(res.notice);
    });
  }

  download(url, title) {
    this.pdf.download(url, title);
    //https://dlc-admin.herokuapp.com/project/openFile/nade.pd
  }

  ngOnInit() {
  }
}
