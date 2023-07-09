import { Component } from '@angular/core';
import { CatwikiService } from '../catwiki.service';

@Component({
  selector: 'app-topbreeds',
  templateUrl: './topbreeds.component.html',
  styleUrls: ['./topbreeds.component.scss']
})

export class TopbreedsComponent {
  top: any = [];
  constructor (private service: CatwikiService){}
  
  ngOnInit(){
    this.toprazas()
  }
  toprazas(){
    this.service.popular_Razas().subscribe(
      (Response) =>{
        this.top = Response
        this.detail_raza()
    },(error)=>{
      console.error('Error al obtener los datos de la API:', error);
    }
    )
  }
  detail_raza(){
    this.top = this.top.map((raza: any)=>{
      this.service.get_Detaiil(raza.nombre_id).subscribe(
        (imagenResponse: any) => {
          const detl = imagenResponse
          raza.desc = detl.results[0].breeds[0].description;
          raza.img = detl.results[0].url;
        },
        (error) => {
          console.error('Error al obtener la imagen de la API:', error);
        }
      );
      return raza;
    })
  }
}
