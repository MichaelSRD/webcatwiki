import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CatwikiService {


  constructor( private http: HttpClient) { }


 
  getRazas() {
    return this.http.get('https://catapi-h015.onrender.com/raza');
  }
  get_Detaiil_Razas(name: string) {
   
    return this.http.get('https://catapi-h015.onrender.com/search/'+name);
  }
  get_Detaiil(name: string) {
   
    return this.http.get('https://catapi-h015.onrender.com/desctop/'+name);
  }
  get_image_Razas(id: string) {

    return this.http.get('https://catapi-h015.onrender.com/images/'+id);
  }
  popular_Razas() {
    return this.http.get('https://catapi-h015.onrender.com/breed/topsearches');
  }
  image_Razas(id: string) {
    const url = this.http.get('https://catapi-h015.onrender.com/image/'+ id)
    return url;

  }
  
  
}
