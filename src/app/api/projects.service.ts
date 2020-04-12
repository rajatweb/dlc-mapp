import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  url = 'http://dlc-admin.herokuapp.com/v1/api/mapp/';

  constructor(private http: HttpClient) { }

  getProjects() {
    return this.http.get(`${this.url}/projects`).pipe(
      // tslint:disable-next-line: no-string-literal
      map(results => results['projects'])
    );
  }

}
