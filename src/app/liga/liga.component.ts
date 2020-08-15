import { Component, OnInit } from '@angular/core';
import { LigaService } from '../service/liga.service';

@Component({
  selector: 'app-liga',
  templateUrl: './liga.component.html',
  styleUrls: ['./liga.component.css']
})
export class LigaComponent implements OnInit {

  liga: any = [];
  times: any = [];

  constructor(private ligaService: LigaService) { }

  ngOnInit() {
    this.ligaService.getTimes().subscribe((data: any) => {
      console.log(data);
      this.liga = data.liga;
      this.times = data.times.sort((a, b) => (b.pontosCampeonato > a.pontosCampeonato) ? 1 : -1);;
    });
  }



}
