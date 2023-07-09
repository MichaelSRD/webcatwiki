import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CatwikiService {


  constructor( private http: HttpClient) { }


 
  getRazas() {
    return this.http.get('http://127.0.0.1:9000/raza');
  }
  get_Detaiil_Razas(name: string) {
   
    return this.http.get('http://127.0.0.1:9000/search/'+name);
  }
  get_Detaiil(name: string) {
   
    return this.http.get('http://127.0.0.1:9000/desctop/'+name);
  }
  get_image_Razas(id: string) {

    return this.http.get('http://127.0.0.1:9000/images/'+id);
  }
  popular_Razas() {
    return this.http.get('http://127.0.0.1:9000/breed/topsearches');
  }
  image_Razas(id: string) {
    const url = this.http.get('http://127.0.0.1:9000/image/'+ id)
    return url;

  }
  
  
}
