import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  url = 'https://dlc-admin.herokuapp.com/v1/api/mapp';

  constructor(private http: HttpClient) { }

  getProjects() {
    return this.http.get(`${this.url}/projects`).pipe(
      // tslint:disable-next-line: no-string-literal
      map(results => results['projects'])
    );
  }

  addPunchList(data) {
    return this.http.post(`${this.url}/project/addPunchList`, data);
  }

  addChangeRequest(data) {
    return this.http.post(`${this.url}/project/addChangeRequest`, data);
  }

  addProjectPhoto(data) {
    return this.http.post(`${this.url}/project/addPhoto`, data);
  }
}
