import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-change',
  templateUrl: './request-change.page.html',
  styleUrls: ['./request-change.page.scss'],
})
export class RequestChangePage implements OnInit {
  changeRequest;
  projectId;
  constructor(public activatedRoute: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((res) => {
      console.log(JSON.parse(res.changeRequest));
      this.changeRequest = JSON.parse(res.changeRequest);
      this.projectId = res.projectId;
    });
  }

  requestChange() {
    this.router.navigate(['/request-change/add'], {
      queryParams: {
        projectId: this.projectId,
        changeRequest: this.changeRequest
      }
    });
  }

  setDetail(item) {
    this.router.navigate(['/request-change/detail'], {
      queryParams: {
        item: JSON.stringify(item)
      }
    });
  }
}
