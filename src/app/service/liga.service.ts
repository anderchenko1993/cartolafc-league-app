import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LigaService {

  API_URL: string = "http://localhost/cartolafc-league-api/api.php";

  constructor(private http: HttpClient) { }

  getTimes() {
    return this.http.get(this.API_URL);
  }

}
