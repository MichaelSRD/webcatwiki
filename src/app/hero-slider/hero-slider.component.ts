import { Component } from '@angular/core';
import { CatwikiService } from '../catwiki.service';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-hero-slider',
  templateUrl: './hero-slider.component.html',
  styleUrls: ['./hero-slider.component.scss']
})
export class HeroSliderComponent {
  searchTerm: string = '';
  searchResults: any = [];
  razas: any = [];
  top: any = [];
  sharedData: any;
  modalopen: boolean = false;

  constructor ( 
    private service: CatwikiService,
    private sharedDataService: SharedDataService
    ){}
  ngOnInit() {
    this.obtenerDatosDesdeAPI();
    this.toprazas();
    this.sharedDataService.getSharedData().subscribe(data => {
      this.sharedData = data;
    });
      }
      obtenerDatosDesdeAPI() {
        this.service.getRazas().subscribe(
          (response) => {
            this.razas = response;
          },
          (error) => {
            console.error('Error al obtener los datos de la API:', error);
          }
        );
        
      }

  search() {
    // Limpiar resultados anteriores
    this.searchResults = [];
    
     
     if (this.searchTerm.trim() === '') {
      return;
    }
    const searchTermLowerCase = this.searchTerm.toLowerCase();
    for (let item of this.razas.results) {
        
        if (item.name.toLowerCase().includes(searchTermLowerCase)) {
          this.searchResults.push(item);
        }
      
    }
  }
  toprazas(){
    this.service.popular_Razas().subscribe(
      (Response) =>{
        this.top = Response
        this.image_raza()
    },(error)=>{
      console.error('Error al obtener los datos de la API:', error);
    }
    )
  }
  image_raza(){
    this.top = this.top.map((raza: any)=>{
      this.service.image_Razas(raza.nombre_id).subscribe(
        (imagenResponse) => {
          raza.imagen = imagenResponse; // Asignar la URL de la imagen a la propiedad "imagen"
        },
        (error) => {
          console.error('Error al obtener la imagen de la API:', error);
        }
      );
      
      return raza;
    })
  }

  updateSharedData(e: any) {
    const newData = e.imagen.image_urls[0];
    this.sharedDataService.setSharedData(newData);
  }

  open_modal(){
    this.modalopen = true
  }
  close_modal(){
    this.modalopen = false
  }
  
}
