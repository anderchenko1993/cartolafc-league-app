import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LigaService {

  constructor(private http: HttpClient) { }

  getLiga(id) {
    let params = new HttpParams().set("id", id);
    return this.http.get(environment.apiUrl, {params: params});
  }

}
