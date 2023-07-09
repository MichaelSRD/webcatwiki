import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatwikiService } from '../catwiki.service';
import { SharedDataService } from '../shared-data.service';
@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss']
})
export class DetallesComponent {
      id: string = ""
      detalles: any = []
      images: any = []
      sharedData: any;
      breeds: any;
      numeroElementos: number;
      elementos: number[];

     constructor( 
      private route : ActivatedRoute, private service: CatwikiService,
      private sharedDataService: SharedDataService
      ){
        this.numeroElementos = 5;
        this.elementos = Array(this.numeroElementos).fill(0).map((x, i) => i + 1);
      }
     ngOnInit(){
       this.id = this.route.snapshot.params['id'];
       this.detail()
       this.sharedDataService.getSharedData().subscribe(data => {
        this.sharedData = data;
        
      });
     }

     detail(){
      this.service.get_Detaiil_Razas(this.id).subscribe(
        (response) => {
          this.detalles = response;
          if (this.sharedData) {
            
          } else {
            this.sharedData =  this.detalles.results[0].url;
          }
          this.image_raza()
        },
        (error) => {
          console.error('Error al obtener los datos de la API:', error);
        }
      );
      
     }
     image_raza(){
      const id_name = this.detalles.results[0].breeds[0].id;
      this.breeds = this.detalles.results[0].breeds;

      this.service.get_image_Razas(id_name).subscribe(
        (response) => {
          this.images = response;
          
        },
        (error) => {
          console.error('Error al obtener los datos de la API:', error);
        }
      );
     }
}
