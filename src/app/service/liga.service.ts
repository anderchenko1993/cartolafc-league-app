import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LigaService {

  API_URL: string = "http://localhost/cartolafc-league-api/api.php";

  constructor(private http: HttpClient) { }

  getLiga(id) {
    let params = new HttpParams().set("id", id);
    return this.http.get(this.API_URL, {params: params});
  }

}
