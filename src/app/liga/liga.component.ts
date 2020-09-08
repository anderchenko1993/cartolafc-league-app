import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LigaService } from '../service/liga.service';



@Component({
  selector: 'app-liga',
  templateUrl: './liga.component.html',
  styleUrls: ['./liga.component.css']
})
export class LigaComponent implements OnInit {

  liga: any = [];
  times: any = [];
  emManutencao = false;
  mensagem: string;
  loading: boolean = true;

  constructor(private ligaService: LigaService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.ligaService.getLiga(params.get('id')).subscribe((data: any) => {
        this.liga = data.liga;
  
        if(data.mensagem) {
          this.emManutencao = true;
          this.mensagem = data.mensagem;
        }
        else {
          this.times = data.times.sort((a, b) => (b.pontosCampeonato > a.pontosCampeonato) ? 1 : -1);
        }
        this.loading = false;
      });
    });
  }

}
